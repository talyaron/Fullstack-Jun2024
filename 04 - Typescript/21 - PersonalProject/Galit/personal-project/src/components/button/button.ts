export function createButton(text: string, id: string): string {
  return `
    <button id="${id}" class="btn">${text}</button>
  `;
}