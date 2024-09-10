const currentPlayer: { player: Player | null } = { player: null };

interface Position {
    x: number;
    y: number;
}

class Player {
    id: string;
    name: string;
    imageUrl: string;
    position: Position;
    playerElement: HTMLElement | null = null;

    constructor(name: string, imageUrl: string, position: Position) {
        this.id = `id-${crypto.randomUUID()}`;
        this.name = name;
        this.position = position;
        this.imageUrl = imageUrl;
    }
    setNewPosition(newPosition: Position) {
        this.position = newPosition;
    }

    setPlayerElement(playerElement: HTMLElement) {
        this.playerElement = playerElement;
    }

    moverPlayer(newPosition: Position) {
        try {
            this.position = newPosition;
            if (!this.playerElement) throw new Error('Player element not found');

            this.playerElement.style.left = newPosition.x + 'px';
            this.playerElement.style.top = newPosition.y + 'px';
        } catch (error) {
            console.error(error);
        }

    }
}

const messi = new Player('Messi', './dist/image/messi.png', { x: 50, y: 50 });
const ronaldo = new Player('Ronaldo', './dist/image/ronaldo.png', { x: 100, y: 100 });
console.log(messi);

//view
function renderNewPlayer(player: Player) {
    try {
        const playerElement = document.createElement('img');
        playerElement.src = player.imageUrl;
        playerElement.id = player.id;
        playerElement.classList.add('player');
        playerElement.style.position = 'absolute';
        playerElement.style.left = player.position.x + 'px';
        playerElement.style.top = player.position.y + 'px';

        playerElement.addEventListener('click', () => {
            currentPlayer.player = player;
            console.log(currentPlayer)
        });

        player.setPlayerElement(playerElement);

        const field = document.getElementById('field');
        if (!field) {
            throw new Error('Field not found');
        }
        field.appendChild(playerElement);
    } catch (error) {
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
        const field = document.getElementById('field');
        if (!field) {
            throw new Error('Field not found');
        }
        field.addEventListener('click', handleMove);
    } catch (error) {
        console.error(error);

    }
}
main();

function handleMove(event: MouseEvent) {

    try {
        if (!currentPlayer.player) throw new Error('Player not selected');
        const player = currentPlayer.player;
        const newPosition = { x: event.clientX, y: event.clientY };
        player.moverPlayer(newPosition);
    } catch (error) {
        console.error(error);
    }
}

