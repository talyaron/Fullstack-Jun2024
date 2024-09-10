var currentPlayer = { player: null };
var Player = /** @class */ (function () {
    function Player(name, imageUrl, position) {
        this.playerElement = null;
        this.id = "id-" + crypto.randomUUID();
        this.name = name;
        this.position = position;
        this.imageUrl = imageUrl;
    }
    Player.prototype.setNewPosition = function (newPosition) {
        this.position = newPosition;
    };
    Player.prototype.setPlayerElement = function (playerElement) {
        this.playerElement = playerElement;
    };
    Player.prototype.moverPlayer = function (newPosition) {
        try {
            this.position = newPosition;
            if (!this.playerElement)
                throw new Error('Player element not found');
            this.playerElement.style.left = newPosition.x + 'px';
            this.playerElement.style.top = newPosition.y + 'px';
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.renderPlayer = function (field) {
        var _this = this;
        try {
            if (!(field instanceof HTMLDivElement))
                throw new Error('field element not found');
            if (this.playerElement)
                return;
            var playerElement = document.createElement('img');
            playerElement.src = this.imageUrl;
            playerElement.id = this.id;
            playerElement.classList.add('player');
            playerElement.style.left = this.position.x + 'px';
            playerElement.style.top = this.position.y + 'px';
            this.setPlayerElement(playerElement);
            playerElement.addEventListener('click', function () {
                currentPlayer.player = _this;
            });
            field.appendChild(playerElement);
        }
        catch (error) {
            console.error(error);
        }
    };
    return Player;
}());
var messi = new Player('Messi', './dist/image/messi.png', { x: 50, y: 50 });
var ronaldo = new Player('Ronaldo', './dist/image/ronaldo.png', { x: 100, y: 100 });
messi.renderPlayer(document.getElementById('field'));
ronaldo.renderPlayer(document.getElementById('field'));
//events
function main() {
    try {
        //get field, and add event listener
        var field = document.getElementById('field');
        if (!field) {
            throw new Error('Field not found');
        }
        field.addEventListener('click', handleMove);
    }
    catch (error) {
        console.error(error);
    }
}
main();
function handleMove(event) {
    try {
        if (!currentPlayer.player)
            throw new Error('Player not selected');
        var player = currentPlayer.player;
        var newPosition = { x: event.clientX, y: event.clientY };
        player.moverPlayer(newPosition);
    }
    catch (error) {
        console.error(error);
    }
}
