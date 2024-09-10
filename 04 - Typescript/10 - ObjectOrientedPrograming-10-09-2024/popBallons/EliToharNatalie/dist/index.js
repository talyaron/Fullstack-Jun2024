var Ballon = /** @class */ (function () {
    function Ballon(id, ballonImgUrl, ExplosionUrl) {
        this.id = "id-" + crypto.randomUUID();
        this.ballonImgUrl = ballonImgUrl;
        this.ExplosionUrl = ExplosionUrl;
    }
    return Ballon;
}());
var ballon1 = new Ballon("", "", "");
