/**
 * @module ui/sound-check.reel
 * @requires ui/Confirm
 */
var Confirm = require("ui/confirm.reel").Confirm,
    Popup = require("matte/ui/popup/popup.reel").Popup

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

},{
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
                confirm;
            if (!popup) {
                popup = new Popup();
                this.popup = popup;

                popup.type = 'confirm';
                popup.title = 'Confirmation 2';
                popup.modal = true;
                this.application._soundCheckPopup = popup;

                confirm = new SoundCheck();
                popup.content = confirm;
            }

            confirm = popup.content;

            if (this.application.contextualizer) {
                this.application.contextualizer.currentLocale = this.application.interfaceLocale.iso;
                this.okLabel = this.application.contextualizer.localize("okay");
                this.cancelLabel = this.application.contextualizer.localize("cancel");
            } else {
                console.log("Not localizing the confirm buttons");
            }
            if (typeof(options) === "string") {
                confirm.msg = options;
                confirm.okLabel = this.okLabel;
                confirm.cancelLabel = this.cancelLabel;
            } else {
                confirm.iconSrc = options.iconSrc;
                confirm.msg = options.message;
                confirm.okLabel = options.okLabel || this.okLabel;
                confirm.cancelLabel = options.cancelLabel || this.cancelLabel;
            }

            confirm.okCallback = okCallback || null;
            confirm.cancelCallback = cancelCallback || null;

            popup.show();
        }
    }
});
exports.SoundCheck = SoundCheck;
