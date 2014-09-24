/**
 * @module ui/image.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
CORS = require("fielddb/api/CORS").CORS;

/**
 * @class Image
 * @extends Component
 */
exports.Image = Component.specialize( /** @lends Image# */ {
	constructor: {
		value: function Image() {
			console.log(this.src);
			this.super();
			this.showImage = false;
			this.verifiedSources = [];
		}
	},

	draw: {
		value: function() {
			console.log(this.src);

			this.verifyImageLoadability();
			this.super();
		}
	},

	/*
	 * Machinery for resolving images from npm modules, hiding image or showing broken image
	 */
	verifyImageLoadability: {
		value: function() {
			if (!this.src) {
				return;
			}
			if (this.src.indexOf("://") > -1) {
				this.src = "http" + this.src.substring(this.src.lastIndexOf("://"));
			}
			if (this.verifiedSources.indexOf(this.src) > -1) {
				this.showImage = true;
				if (this.templateObjects.image.src !== this.src) {
					this.templateObjects.image.src = this.src;
					this.needsDraw = true;
				}
				return;
			}
			this.showImage = false;
			var self = this;

			CORS.makeCORSRequest({
				method: "GET",
				url: this.src,
				withCredentials: false
			}).then(function(result) {
				// console.log("Image exists ", result);
				self.verifiedSources.push(self.src);
				self.templateObjects.image.src = self.src;
				self.showImage = true;
				self.needsDraw = true;
			}, function(reason) {
				console.log("Unable to find image ", reason);
				if (self.onerrorSrc) {
					console.log("Displaying onerrorSrc image. ");
					self.templateObjects.image.src = self.onerrorSrc;
					self.showImage = true;
					self.needsDraw = true;
				}
			});
		}
	}

});
