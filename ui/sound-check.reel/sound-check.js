/**
 * @module ui/sound-check.reel
 * @requires ui/Confirm
 */
var Confirm = require("ui/confirm.reel").Confirm;

/**
 * @class SoundCheck
 * @extends Confirm
 */
exports.SoundCheck = Confirm.specialize(/** @lends SoundCheck# */ {
    constructor: {
        value: function SoundCheck() {
            this.super();
        }
    }
});
