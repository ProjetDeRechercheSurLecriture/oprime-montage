/**
 * @module ui/stimulus.reel
 * @requires montage/ui/component
 */
var ContextualizableComponent = require("core/contextualizable-component").ContextualizableComponent,
	FieldDBResponse = require("fielddb/api/datum/Response").Response,
	// Confirm = require("ui/confirm.reel").Confirm,
	Response = require("ui/response.reel").Response,
	PressComposer = require("montage/composer/press-composer").PressComposer,
	RangeController = require("montage/core/range-controller").RangeController,
	Promise = require("montage/core/promise").Promise;

/**
 * @class AbstractStimulus
 * @extends FieldDBResponse
 */

var AbstractStimulus = function AbstractStimulus(options) {
	this.debug("Constructing AbstractStimulus ", options);
	FieldDBResponse.apply(this, arguments);
	// ContextualizableComponent.prototype.constructor.apply(this, arguments);

};

AbstractStimulus.prototype = Object.create(FieldDBResponse.prototype, /** @lends AbstractStimulus.prototype */ {
	constructor: {
		value: AbstractStimulus
	},

	contextualizer: {
		get: function() {
			return this.application.contextualizer;
		}
	},

	currentReinforcementImageSrc: {
		value: "../../assets/img/blank.png"
	},

	/**
	 *  dont draw automatically refs: http://montagejs.github.io/mfiddle/#!/7932746
	 * @type {Object}
	 */
	// willDraw: {
	//        value: function() {
	//			console.log("Stimulus does not draw automatically, instead it is drawn in steps by its child classes.");
	//        }
	//    },

	responsesController: {
		value: null,
		configurable: true
	},

	/*
	 * Machinery for Recording stimuli responses.
	 *
	 * Inspired by the digit video reel:
	 * https://github.com/montagejs/digit/tree/master/ui/video.reel
	 */
	enterDocument: {
		value: function(firstTime) {
			ContextualizableComponent.prototype.enterDocument.apply(this, arguments);
			 // this.super();

			if (firstTime) {
				this.setupFirstPlay();
				this.addOwnPropertyChangeListener("src", this);
			}
			this.reactionTimeStart = Date.now();
		}
	},

	handlePress: {
		value: function(touchEvent) {
			// console.log("event " + JSON.stringify(touchEvent.event));
			// console.log("targetElement " + JSON.stringify(touchEvent.targetElement));
			console.log("The stimulus has been pressed: ");
			if (touchEvent && touchEvent.targetElement && touchEvent.targetElement.dataset && touchEvent.targetElement.dataset.montageId && touchEvent.targetElement.classList.contains("Stimulus-record-touch-response")) {
				this.addResponse(touchEvent.event, touchEvent.targetElement.dataset.montageId);
			} else {
				this.addNonResponse(touchEvent.event);
			}
		}
	},

	handleAction: {
		value: function(touchEvent) {
			console.log("The stimulus has been actioned: ");
			this.handlePress(touchEvent);
		}
	},

	handleTouchup: {
		value: function(touchEvent) {
			console.log("The stimulus has been touchuped: ");
			this.handlePress(touchEvent);
		}
	},

	handlePressStart: {
		value: function(touchEvent) {
			console.log("The stimulus has been pressStarted: ");
		}
	},

	handleLongAction: {
		value: function(touchEvent) {
			console.log("The stimulus has been longActioned: ");
		}
	},

	handleLongPress: {
		value: function(touchEvent) {
			console.log("The stimulus has been handleLongPress: ");
			this.handlePress(touchEvent);
		}
	},

	prepareForActivationEvents: {
		value: function() {
			// this._pressComposer.addEventListener("pressStart", this, false);
			this._pressComposer.addEventListener("press", this, false);
			this._pressComposer.addEventListener("touchup", this, false);
			this._pressComposer.addEventListener("action", this, false);
			this._pressComposer.addEventListener("longAction", this, false);
			this._pressComposer.addEventListener("longPress", this, false);
			// this._pressComposer.addEventListener("pressCancel", this, false);
		}
	},

	setupFirstPlay: {
		value: function() {
			// this.element.removeEventListener("touchstart", this, false);
			// this.element.removeEventListener("mousedown", this, false);

			this._pressComposer = PressComposer.create();
			this._pressComposer.identifier = "stimulus";
			this.addComposerForElement(this._pressComposer, this.element);
		}
	},

	load: {
		value: function() {
			FieldDBResponse.prototype.load.apply(this, []);
			this.responsesController = new RangeController().initWithContent(this.responses);
		}
	}

});

exports.AbstractStimulus = AbstractStimulus;
