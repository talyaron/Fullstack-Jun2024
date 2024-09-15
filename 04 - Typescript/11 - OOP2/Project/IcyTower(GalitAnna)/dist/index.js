var character = './images/character1.png';
var Step = /** @class */ (function () {
    function Step(length, height) {
        try {
            this.length = length;
            this.height = height;
        }
        catch (error) {
            console.error(error);
        }
    }
    return Step;
}());
