main();
function main() {
    try {
        var appElement = document.querySelector('#app');
        if (!appElement)
            throw new Error('Element not found');
        renderPage(appElement);
    }
    catch (error) {
        console.log(error);
    }
}
function renderPage(appElement) {
    appElement.innerHTML = "\n        <div class=\"title\">\n            <h1 class=\"title__text\"> Hi! I'm Daniel <span class=\"title__text__bold\" id=\"cherno\"> (Cherno) </span> Chornopiski </h1>\n            <h1 class=\"title__text\"> A <span class=\"title__text__bold\" id=\"fullstack\"> Fullstack Developer, </span>\n            and a <span class=\"title__text__bold\" id=\"devops\"> Dev-Ops enthusiast. </span> </h1>\n        </div>\n        <div id=\"content\">\n        </div>\n    ";
    listenToTitle();
}
function listenToTitle() {
    try {
        var cherno_1 = document.querySelector('#cherno');
        var fullstack_1 = document.querySelector('#fullstack');
        var devops_1 = document.querySelector('#devops');
        var content_1 = document.querySelector('#content');
        if (!cherno_1 || !fullstack_1 || !devops_1)
            throw new Error('Element not found');
        cherno_1.addEventListener('mouseover', function () { return onChernoHover(cherno_1, fullstack_1, devops_1, content_1); });
        fullstack_1.addEventListener('mouseover', function () { return onFullstackHover(cherno_1, fullstack_1, devops_1, content_1); });
        devops_1.addEventListener('mouseover', function () { return onDevopsHover(cherno_1, fullstack_1, devops_1, content_1); });
    }
    catch (error) {
        console.log(error);
    }
}
function onChernoHover(cherno, fullstack, devops, content) {
    try {
        if (cherno.style.color == "var(--highlight_color)")
            return;
        cherno.style.color = "var(--highlight_color)";
        fullstack.style.color = "var(--secondary_bold_color)";
        devops.style.color = "var(--secondary_bold_color)";
        content.classList.remove("fade-in");
        setTimeout(function () {
            content.innerHTML = "\n            <p> born in 2002 in Rehovot, Israel, where I reside till today, but looking to move. </p>\n            <p> allways been active in the community, such as being part of the city youth group, participating in olympiads, debate and innovation  national competitions </p>\n            <p> military service: a telecommunication technitian, fixing and managing electronics by request of army devisions and outside providing companies </p>\n            <p> a climbing enthusiast, even used to be an instructor. also love tabletop and video games </p>\n            ";
            content.classList.add("fade-in");
        }, 500);
    }
    catch (error) {
        console.log(error);
    }
}
function onFullstackHover(cherno, fullstack, devops, content) {
    try {
        if (fullstack.style.color == "var(--highlight_color)")
            return;
        cherno.style.color = "var(--secondary_bold_color)";
        fullstack.style.color = "var(--highlight_color)";
        devops.style.color = "var(--secondary_bold_color)";
        content.classList.remove("fade-in");
        setTimeout(function () {
            content.innerHTML = "\n            <p> allways been enthusiatic about coding, starting the self learning journy at 7th grade after a single computer class lesson </p>\n            <p> a full-stack developer, currently using TypeScript and Express.js. </p>\n            <p> knowledge in building UIs, handling backend tasks, and handling frameworks </p>\n            <p> I'm always looking for new opportunities to learn and grow, currently learning about maintaining databases and react </p>\n            ";
            content.classList.add("fade-in");
        }, 500);
    }
    catch (error) {
        console.log(error);
    }
}
function onDevopsHover(cherno, fullstack, devops, content) {
    try {
        if (devops.style.color == "var(--highlight_color)")
            return;
        cherno.style.color = "var(--secondary_bold_color)";
        fullstack.style.color = "var(--secondary_bold_color)";
        devops.style.color = "var(--highlight_color)";
        content.classList.remove("fade-in");
        setTimeout(function () {
            content.innerHTML = "\n            <p> knowledge of automating and maintaining software infrastructure. </p>\n            <p> experience in using tools like Docker, Terraform and Jenkins as well as managing cloud platforms with AWS. </p>\n            <p> deep understanding of linux administration, Networking (CCNA), and automation with bash, C, and Python </p>\n            <p> strong understanding of DevOps best practices and methodologies.</p>\n            ";
            content.classList.add("fade-in");
        }, 500);
    }
    catch (error) {
        console.log(error);
    }
}
