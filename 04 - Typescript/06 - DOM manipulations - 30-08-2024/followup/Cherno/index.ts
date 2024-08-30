function main()
{
    const textArr: string[] = ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
    const lines: NodeListOf<HTMLElement> = document.querySelectorAll('.line');

    lines.forEach((line, index) => 
    {
        line.textContent = textArr[index]
    });
}

main()