window.onload = function () {
    var popup = document.getElementById('image-popup');
    popup.style.display = 'flex';
    // אם תרצה להסתיר את התמונה אחרי זמן מסוים (למשל 5 שניות):
    setTimeout(function () {
        popup.style.display = 'none';
    }, 5000); // 5000 מילישניות = 5 שניות
};
var Obstacles = /** @class */ (function () {
    function Obstacles(position, imageUrl, isAttack) {
        this.id = "id-" + crypto.randomUUID();
        this.position = position;
        this.ImageURL = imageUrl;
        this.isAttack = isAttack;
    }
    Obstacles.prototype.renderObstacles = function () {
        try {
            var obstacles_1 = document.getElementById("main");
            if (!obstacles_1)
                throw new Error("obstacles character div not found.");
            var obstaclesIMG = document.createElement("img");
            obstaclesIMG.src = this.ImageURL;
            obstaclesIMG.id = this.id;
            obstaclesIMG.style.position = "absolute";
            obstaclesIMG.style.left = this.position.y + "px";
            obstaclesIMG.style.top = this.position.x + "px";
            obstaclesIMG.style.width = "100px";
            obstaclesIMG.style.height = "200px";
            obstacles_1.appendChild(obstaclesIMG);
            this.startRunning();
        }
        catch (error) {
            console.error(error);
        }
    };
    Obstacles.prototype.alwaysRun = function () {
        var obstaclesElement = document.getElementById(this.id);
        if (obstaclesElement) {
            this.position.y -= 1;
            obstaclesElement.style.left = this.position.y + "px";
        }
    };
    Obstacles.prototype.startRunning = function () {
        var _this = this;
        if (this.isAttack) {
            this.isAttack = false;
            this.intervalID = setInterval(function () {
                _this.alwaysRun();
            }, 5);
        }
    };
    return Obstacles;
}());
var obstacles = new Obstacles({ x: 380, y: 1150 }, "./dist/images/Obstacles.png", true); //
setInterval(function () { obstacles.renderObstacles(); }, 3000);
var Mario = /** @class */ (function () {
    function Mario(position, ImageURL, score) {
        this.id = "id-" + crypto.randomUUID();
        this.position = position;
        this.ImageURL = ImageURL;
        this.isRunning = false;
        this.isJumping = false;
        this.intervalID = null;
        this.score = score;
    }
    // שגיב
    Mario.prototype.renderScore = function () {
        try {
            var scoreDiv = document.getElementById("score");
            if (scoreDiv) {
                console.log("Score div found");
                this.scoreParagraph = document.createElement("p");
                this.scoreParagraph.innerText = "Score: " + this.score;
                scoreDiv.appendChild(this.scoreParagraph);
                console.log("Score paragraph added");
            }
            else {
                console.log("Score div not found");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    Mario.prototype.updateScore = function () {
        this.score += 1; // every secend add one point
        this.scoreParagraph.innerText = "Score: " + this.score;
    };
    Mario.prototype.startScoreTimer = function () {
        var _this = this;
        this.scoreIntervalID = setInterval(function () {
            _this.updateScore();
        }, 100);
    };
    Mario.prototype.stopScoreTimer = function () {
        if (this.scoreIntervalID) {
            clearInterval(this.scoreIntervalID);
            this.scoreIntervalID = null;
        }
    };
    Mario.prototype.resetScore = function () {
        this.score = 0;
        if (this.scoreParagraph) {
            this.scoreParagraph.innerText = "Score: " + this.score;
        }
    };
    // נועם
    Mario.prototype.renderMario = function () {
        try {
            var mario_1 = document.getElementById("mariocharacter");
            if (!mario_1)
                throw new Error("Mario character div not found.");
            var marioIMG = document.createElement("img");
            marioIMG.src = this.ImageURL;
            marioIMG.id = this.id;
            marioIMG.style.position = "absolute";
            marioIMG.style.left = this.position.y +  + "px";
            marioIMG.style.top = this.position.x + "px";
            marioIMG.style.width = "100px";
            marioIMG.style.height = "200px";
            mario_1.appendChild(marioIMG);
            this.renderScore(); //render score (שגיב)
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
            this.position.y += 4;
            marioElement.style.left = this.position.y + "px";
        }
        if (this.position.y >= 1820) {
            alert("ניצחת יאלה תתחיל מחדש");
            this.position.y = 0;
            this.resetScore();
        }
    };
    Mario.prototype.startRunning = function () {
        var _this = this;
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalID = setInterval(function () {
                _this.alwaysRun();
            }, 50);
            this.startScoreTimer(); //start the timer (שגיב)
        }
    };
    Mario.prototype.stopRunning = function () {
        if (this.isRunning && this.intervalID) {
            clearInterval(this.intervalID);
            this.intervalID = null;
            this.isRunning = false;
            this.stopScoreTimer(); //stop game timer (שגיב)
            alert("המשחק נעצר");
        }
    };
    return Mario;
}());
var mario = new Mario({ x: 340, y: 0 }, "./dist/images/mario.png", 0); // הדיפולט לא לגעת בזה, הגדרתי מיקום שיהיה על הרצפה ושיהיה צמוד לקיר (נועם)
mario.renderMario();
document.addEventListener("keydown", function (e) {
    if (e.key === " ") {
        mario.jump();
    }
    else if (e.key === "w") {
        mario.stopRunning();
    }
});
setInterval(function () { mario.startRunning(); }, 300);
