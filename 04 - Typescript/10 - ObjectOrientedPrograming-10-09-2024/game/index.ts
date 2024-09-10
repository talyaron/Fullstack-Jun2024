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
    renderPlayer(field: HTMLDivElement) {
        try {
            if (!(field instanceof HTMLDivElement)) throw new Error('field element not found');
            if (this.playerElement) return;

            const playerElement = document.createElement('img');
            playerElement.src = this.imageUrl;
            playerElement.id = this.id;
            playerElement.classList.add('player');
            playerElement.style.left = this.position.x + 'px';
            playerElement.style.top = this.position.y + 'px';
            this.setPlayerElement(playerElement);
            playerElement.addEventListener('click', () => {
                currentPlayer.player = this;
            });
            field.appendChild(playerElement);
        }
        catch (error) {
            console.error(error);
        }
    }
}

const messi = new Player('Messi', './dist/image/messi.png', { x: 50, y: 50 });
const ronaldo = new Player('Ronaldo', './dist/image/ronaldo.png', { x: 100, y: 100 });
messi.renderPlayer(document.getElementById('field') as HTMLDivElement);
ronaldo.renderPlayer(document.getElementById('field') as HTMLDivElement);




//events

function main() {
    try {
        //get field, and add event listener
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

