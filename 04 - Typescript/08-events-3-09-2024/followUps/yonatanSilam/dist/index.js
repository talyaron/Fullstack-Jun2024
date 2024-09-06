// (() => {
//     try {
//         const theButton = document.querySelector('#the-button') as HTMLButtonElement;
//         if (!theButton) throw new Error('button not found');
//         theButton.addEventListener('click', (event) => {
//             console.dir(event);
//             console.log('you clicked me');
//             document.body.style.backgroundColor = getRandomColor();
//         });
//         theButton.onclick = (event) => {
//             console.dir(event);
//             console.log('you clicked me');
//             document.body.style.backgroundColor = getRandomColor();
//         };
//         theButton.onmouseenter = () => {
//             console.log('mouse entered');
//             document.body.style.fontSize = '1.2em';
//         }
//         theButton.onmouseleave = () => {
//             console.log('mouse left');
//             document.body.style.fontSize = '1em';
//         }
//         const theInput = document.querySelector('#the-input') as HTMLInputElement;
//         if (!theInput) throw new Error('input not found');
//         theInput.oninput = (event) => {
//             try {
//                 console.dir(event);
//                 console.dir(theInput);
//                 console.log('you typed:', theInput.value);
//                 const theOutput = document.querySelector('#output') as HTMLDivElement;
//                 if (!theOutput) throw new Error('output not found');
//                 theOutput.textContent = theInput.value;
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//     } catch (err) {
//         console.error(err);
//     }
// })();
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// window.addEventListener('beforeunload', function(event) {
//     // Custom message text cannot be shown, the browser will display its own message
//     const confirmationMessage = 'Are you sure you want to leave? You may have unsaved changes.';
//     // For most browsers, you need to set the returnValue property
//     event.preventDefault();
//     event.returnValue = confirmationMessage;  // Standard method to trigger the confirmation dialog
//     // Note: Most modern browsers ignore the custom message and show their default text.
//   });
//   interface Trail {
//     x: number;
//     y: number;
//     color: string;
//     alpha: number;
// }
// const canvas = document.getElementById('trailCanvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d')!;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let trails: Trail[] = [];
// function drawTrail(): void {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     trails.forEach(trail => {
//         ctx.beginPath();
//         ctx.arc(trail.x, trail.y, 5, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${parseInt(trail.color.slice(1, 3), 16)}, ${parseInt(trail.color.slice(3, 5), 16)}, ${parseInt(trail.color.slice(5, 7), 16)}, ${trail.alpha})`;
//         ctx.fill();
//         trail.alpha -= 0.05;
//     });
//     trails = trails.filter(trail => trail.alpha > 0);
// }
// canvas.addEventListener('mousemove', (e: MouseEvent) => {
//     const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
//     trails.push({
//         x: e.clientX,
//         y: e.clientY,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         alpha: 1
//     });
// });
// function animate(): void {
//     drawTrail();
//     requestAnimationFrame(animate);
// }
// animate();
// TypeScript code
var canvas = document.getElementById('animationCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var animationFrameId = null;
var isAnimationPaused = false;
function draw() {
    if (!ctx)
        return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var time = new Date().getTime() / 1000;
    var x = Math.sin(time) * canvas.width / 2 + canvas.width / 2;
    var y = Math.cos(time) * canvas.height / 2 + canvas.height / 2;
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#FF5722';
    ctx.fill();
    if (!isAnimationPaused) {
        animationFrameId = requestAnimationFrame(draw);
    }
}
function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        isAnimationPaused = true;
        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
        }
    }
    else {
        isAnimationPaused = false;
        draw(); // Restart the animation when the page becomes visible
    }
}
// Add event listener for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange);
// Start the animation loop
draw();
