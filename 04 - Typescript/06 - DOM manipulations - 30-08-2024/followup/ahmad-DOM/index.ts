

const strings: string[] = ["Hello", "world", "this", "is", "colorful"];
const colors: string[] = ['color1', "color2", "color3", "color4", "color5"];

const container: HTMLElement | null = document.querySelector('#string-container');

function main(){
if (container) {
    strings.forEach((str: string, index: number) => {
        const span: HTMLSpanElement = document.createElement('span');
        span.className = colors[index % colors.length]; // Apply color class
        span.textContent = str + " "; // Add the string and a space
        container.appendChild(span);
    });
} else {
    console.error('Container element not found');
}
}

main()