main()

function main()
{
    try
    {
        const appElement = document.querySelector<HTMLElement>('#app');
        if (!appElement) throw new Error('Element not found');

        renderPage(appElement);
    }
    catch (error)
    {
        console.log(error);
    }
}

function renderPage(appElement: HTMLElement)
{
    appElement.innerHTML = `
        <div class="title">
            <h1 class="title__text"> Hi! I'm Daniel <span class="title__text__bold" id="cherno"> (Cherno) </span> Chornopiski </h1>
            <h1 class="title__text"> A <span class="title__text__bold" id="fullstack"> Fullstack Developer, </span>
            and a <span class="title__text__bold" id="devops"> Dev-Ops enthusiast. </span> </h1>
        </div>
        <div id="content">
        </div>
    `

    listenToTitle();
}

function listenToTitle()
{
    try
    {
        const cherno = document.querySelector<HTMLElement>('#cherno');
        const fullstack = document.querySelector<HTMLElement>('#fullstack');
        const devops = document.querySelector<HTMLElement>('#devops');
        const content = document.querySelector<HTMLElement>('#content');

        if (!cherno ||!fullstack ||!devops) throw new Error('Element not found');

        cherno.addEventListener('mouseover', () => onChernoHover(cherno, fullstack, devops, content));
        fullstack.addEventListener('mouseover', () => onFullstackHover(cherno, fullstack, devops, content));
        devops.addEventListener('mouseover', () => onDevopsHover(cherno, fullstack, devops, content));

    }
    catch(error)
    {
        console.log(error);
    }
}

function onChernoHover(cherno, fullstack, devops, content)
{
    try
    {
        if (cherno.style.color == "var(--highlight_color)") return;

        cherno.style.color = "var(--highlight_color)";
        fullstack.style.color = "var(--secondary_bold_color)";
        devops.style.color = "var(--secondary_bold_color)";

        content.classList.remove("fade-in");

        setTimeout(() => 
        {
            content.innerHTML = `
            <p> born in 2002 in Rehovot, Israel, where I reside till today, but looking to move. </p>
            <p> allways been active in the community, such as being part of the city youth group, participating in olympiads, debate and innovation  national competitions </p>
            <p> military service: a telecommunication technitian, fixing and managing electronics by request of army devisions and outside providing companies </p>
            <p> a climbing enthusiast, even used to be an instructor. also love tabletop and video games </p>
            `

            content.classList.add("fade-in");
        }, 500)
    }
    catch(error)
    {
        console.log(error);
    }
}

function onFullstackHover(cherno, fullstack, devops, content)
{
    try
    {
        if (fullstack.style.color == "var(--highlight_color)") return;

        cherno.style.color = "var(--secondary_bold_color)";
        fullstack.style.color = "var(--highlight_color)";
        devops.style.color = "var(--secondary_bold_color)";

        content.classList.remove("fade-in");

        setTimeout(() => 
        {
            content.innerHTML = `
            <p> allways been enthusiatic about coding, starting the self learning journy at 7th grade after a single computer class lesson </p>
            <p> a full-stack developer, currently using TypeScript and Express.js. </p>
            <p> knowledge in building UIs, handling backend tasks, and handling frameworks </p>
            <p> I'm always looking for new opportunities to learn and grow, currently learning about maintaining databases and react </p>
            `;

            content.classList.add("fade-in");
        }, 500)

    }
    catch(error)
    {
        console.log(error);
    }
}

function onDevopsHover(cherno, fullstack, devops, content)
{
    try
    {
        if (devops.style.color == "var(--highlight_color)") return;

        cherno.style.color = "var(--secondary_bold_color)";
        fullstack.style.color = "var(--secondary_bold_color)";
        devops.style.color = "var(--highlight_color)";

        content.classList.remove("fade-in");

        setTimeout(() => 
        {
            content.innerHTML = `
            <p> knowledge of automating and maintaining software infrastructure. </p>
            <p> experience in using tools like Docker, Terraform and Jenkins as well as managing cloud platforms with AWS. </p>
            <p> deep understanding of linux administration, Networking (CCNA), and automation with bash, C, and Python </p>
            <p> strong understanding of DevOps best practices and methodologies.</p>
            `

            content.classList.add("fade-in");
        }, 500)
    }
    catch(error)
    {
        console.log(error);
    }
}