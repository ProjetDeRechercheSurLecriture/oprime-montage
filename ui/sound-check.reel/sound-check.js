/**
 * @module ui/sound-check.reel
 * @requires ui/Confirm
 */
var Confirm = require("ui/confirm.reel").Confirm,
    Popup = require("matte/ui/popup/popup.reel").Popup;

/**
 * @class SoundCheck
 * @extends Confirm
 */
var SoundCheck = Confirm.specialize( /** @lends SoundCheck# */ {
    constructor: {
        value: function SoundCheck() {
            this.super();
        }
    },

    hasTemplate: {
        value: true
    }

}, {
    microphoneCheck: {
        value: function() {
            this.periphialsCheck(false);
        }
    },
    videoCheck: {
        value: function() {
            this.periphialsCheck(true);
        }
    },
    periphialsCheck: {
        value: function(withVideo) {
            var application = this.application;
            var waitUntilVideoElementIsRendered = function() {

                /* access camera and microphone
                    http://www.html5rocks.com/en/tutorials/getusermedia/intro/
                 */
                navigator.getUserMedia = navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia ||
                    navigator.msGetUserMedia;

                if (navigator.getUserMedia) {
                    console.log("hasGetUserMedia");

                    var video = document.getElementById("video-preview");
                    var canvas = document.getElementById("video-snapshot-canvas");
                    var snapshotImage = document.getElementById("video-snapshot");
                    canvas.width = 640;
                    canvas.height = 360;
                    var ctx = canvas.getContext("2d");


                    var errorCallback = function(e) {
                        console.log("User refused access to camera and microphone!", e);
                    };

                    navigator.getUserMedia({
                            video: {
                                mandatory: {
                                    maxWidth: canvas.width,
                                    maxHeight: canvas.height
                                }
                            },
                            audio: true
                        },
                        function(localMediaStream) {
                            if (withVideo) {
                                video.removeAttribute("hidden");
                                snapshotImage.removeAttribute("hidden");
                            }
                            video.src = window.URL.createObjectURL(localMediaStream);

                            var takeSnapshot = function takeSnapshot() {
                                if (localMediaStream) {
                                    ctx.drawImage(video, 0, 0);
                                    // "image/webp" works in Chrome.
                                    // Other browsers will fall back to image/png.
                                    snapshotImage.src = canvas.toDataURL("image/webp");
                                }
                            };
                            video.addEventListener("click", takeSnapshot, false);


                            // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
                            // See crbug.com/110938.
                            video.onloadedmetadata = function(e) {
                                // Ready to go. Do some stuff.
                                console.log("Video preview is working, take note of this in application so user can continue to the game.");
                                application.videoRecordingVerified = true;
                            };
                        },
                        errorCallback
                    );

                } else {
                    alert("The Microphone is not supported in your browser");
                }
            };
            if (!document.getElementById("video-preview")) {
                window.setTimeout(waitUntilVideoElementIsRendered, 2000);
            } else {
                waitUntilVideoElementIsRendered();
            }
        }
    },
    /**
        Description TODO
        @type {Function}
        @default null
    */
    popup: {
        set: function(value) {
            this._popup = value;
        },
        get: function() {
            return this._popup;
        }
    },

    show: {
        value: function(options, okCallback, cancelCallback) {
            var popup = this.application._soundCheckPopup,
                confirmDialog;

            if (!popup) {
                popup = new Popup();
                this.popup = popup;

                popup.type = "confirmDialog";
                popup.title = "Confirmation 2";
                popup.modal = true;
                this.application._soundCheckPopup = popup;

                confirmDialog = new SoundCheck();
                popup.content = confirmDialog;
            }

            confirmDialog = popup.content;
            var self = this.application._soundCheckPopup;

            if (this.application.contextualizer) {
                this.application.contextualizer.currentLocale = this.application.interfaceLocale.iso;
                this.okLabel = this.application.contextualizer.localize("okay");
                this.cancelLabel = this.application.contextualizer.localize("cancel");
            } else {
                console.log("Not localizing the confirmDialog buttons");
            }
            if (typeof(options) === "string") {
                confirmDialog.msg = options;
                confirmDialog.okLabel = this.okLabel;
                confirmDialog.cancelLabel = this.cancelLabel;
            } else {
                confirmDialog.iconSrc = options.iconSrc;
                confirmDialog.msg = options.message;
                confirmDialog.okLabel = options.okLabel || this.okLabel;
                confirmDialog.cancelLabel = options.cancelLabel || this.cancelLabel;
            }

            confirmDialog.okCallback = okCallback || null;
            confirmDialog.cancelCallback = cancelCallback || null;

            popup.show();
            if (options.microphoneOnly) {
                this.microphoneCheck();
            } else {
                this.videoCheck();
            }
        }
    }
});
exports.SoundCheck = SoundCheck;
