var Bird = /** @class */ (function () {
    function Bird(position) {
        this.id = "id" + crypto.randomUUID();
        this.position = position;
        this.imgUrl = "";
    }
    return Bird;
}());
