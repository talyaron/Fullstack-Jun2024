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
    return Player;
}());
var messi = new Player('Messi', './dist/image/messi.png', { x: 50, y: 50 });
var ronaldo = new Player('Ronaldo', './dist/image/ronaldo.png', { x: 100, y: 100 });
console.log(messi);
//view
function renderNewPlayer(player) {
    try {
        var playerElement = document.createElement('img');
        playerElement.src = player.imageUrl;
        playerElement.id = player.id;
        playerElement.classList.add('player');
        playerElement.style.position = 'absolute';
        playerElement.style.left = player.position.x + 'px';
        playerElement.style.top = player.position.y + 'px';
        playerElement.addEventListener('click', function () {
            currentPlayer.player = player;
            console.log(currentPlayer);
        });
        player.setPlayerElement(playerElement);
        var field = document.getElementById('field');
        if (!field) {
            throw new Error('Field not found');
        }
        field.appendChild(playerElement);
    }
    catch (error) {
        console.error(error);
    }
}
renderNewPlayer(messi);
renderNewPlayer(ronaldo);
console.log(ronaldo);
//events
function main() {
    try {
        //get field, andd add event listener
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
