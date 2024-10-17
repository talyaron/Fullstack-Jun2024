export function createContainer(content: string): string {
    return `
      <div class="container">
        ${content}
      </div>
    `;
  }