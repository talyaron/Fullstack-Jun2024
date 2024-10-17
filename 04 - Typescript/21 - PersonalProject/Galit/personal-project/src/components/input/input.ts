export function createInput(placeholder: string, type: string = "text"): string {
    return `<input class="input" type="${type}" placeholder="${placeholder}"/>`;
  }