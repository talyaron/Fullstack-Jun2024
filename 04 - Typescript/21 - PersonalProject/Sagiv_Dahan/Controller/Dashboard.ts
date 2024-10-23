export function dashboardPage(): HTMLElement | null {
    try {
        const DivElement = document.getElementById("dashboard");
        console.log("hello idan");
        if (DivElement) {
            const NavElement = document.createElement("nav");
            const UlElement = document.createElement("ul");
            const LiElement = document.createElement("li");
            return DivElement;
        } else {
            return null;
        }
    } catch (error) {
        console.error("function isn't found.", error);
        return null; 
    }
}

