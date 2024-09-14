var Mario = /** @class */ (function () {
    function Mario(position, ImageURL) {
        this.id = "id-" + crypto.randomUUID();
        this.position = position;
        this.ImageURL = ImageURL;
        this.isRunning = false;
        this.isJumping = false;
        this.intervalID = null;
    }
    Mario.prototype.renderMario = function () {
        try {
            var mario_1 = document.getElementById("mariocharacter");
            if (!mario_1)
                throw new Error("Mario character div not found.");
            var marioIMG = document.createElement("img");
            marioIMG.src = this.ImageURL;
            marioIMG.id = this.id;
            marioIMG.style.position = "absolute";
            marioIMG.style.left = this.position.y + "px";
            marioIMG.style.top = this.position.x + "px";
            marioIMG.style.width = "100px";
            marioIMG.style.height = "200px";
            mario_1.appendChild(marioIMG);
        }
        catch (error) {
            console.error(error);
        }
    };
    Mario.prototype.jump = function () {
        var _this = this;
        if (this.isJumping)
            return;
        this.isJumping = true;
        var marioElement = document.getElementById(this.id);
        if (marioElement) {
            marioElement.classList.add("jump-animation");
            setTimeout(function () {
                marioElement.classList.remove("jump-animation");
            }, 500);
            setTimeout(function () {
                _this.isJumping = false;
            }, 600);
        }
    };
    Mario.prototype.alwaysRun = function () {
        var marioElement = document.getElementById(this.id);
        if (marioElement) {
            this.position.y += 12;
            marioElement.style.left = this.position.y + "px";
        }
        if (this.position.y >= 1820) {
            alert("ניצחת יאלה תתחיל מחדש");
            this.position.y = 0;
        }
    };
    Mario.prototype.startRunning = function () {
        var _this = this;
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalID = setInterval(function () {
                _this.alwaysRun();
            }, 50);
        }
    };
    Mario.prototype.stopRunning = function () {
        if (this.isRunning && this.intervalID) {
            clearInterval(this.intervalID);
            this.intervalID = null;
            this.isRunning = false;
            alert("המשחק נעצר");
        }
    };
    return Mario;
}());
var mario = new Mario({ x: 600, y: 0 }, "./dist/images/mario.png"); // הדיפולט לא לגעת בזה, הגדרתי מיקום שיהיה על הרצפה ושיהיה צמוד לקיר (נועם)
mario.renderMario();
document.addEventListener("keydown", function (e) {
    if (e.key === " ") {
        mario.jump();
    }
    else if (e.key === "w") {
        mario.stopRunning();
    }
});
setInterval(function () {
    mario.startRunning();
}, 300);
