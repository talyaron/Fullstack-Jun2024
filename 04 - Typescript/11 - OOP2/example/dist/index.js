var Ballon = /** @class */ (function () {
    function Ballon(imageUrl, position) {
        this.imageUrl = imageUrl;
        this.position = position;
        try {
            this.imageUrl = imageUrl;
            this.position = position;
            this.id = "id-" + crypto.randomUUID();
        }
        catch (error) {
            console.error(error);
        }
    }
    //methods
    //explode ballon
    Ballon.prototype.explode = function () {
        console.log("Ballon " + this.id + " exploded");
    };
    Object.defineProperty(Ballon.prototype, "positionObj", {
        // changeId(id: string){
        //     this.id = id;
        // }
        //setter and getters
        get: function () {
            return this.position;
        },
        set: function (position) {
            this.position = position;
        },
        enumerable: false,
        configurable: true
    });
    Ballon.prototype.getPositionObj2 = function () {
        return this.position;
    };
    Ballon.prototype.setPositionObj2 = function (position) {
        this.position = position;
    };
    return Ballon;
}());
var ballon = new Ballon('ballon.png', { x: 0, y: 0 });
console.log(ballon);
ballon.changeId("id-123");
console.log(ballon.positionObj);
ballon.positionObj = { x: 10, y: 10 }; //SETTER
ballon.setPositionObj2({ x: 20, y: 20 }); //method
console.log(ballon.positionObj); //GETTER
console.log(ballon.getPositionObj2()); //method
