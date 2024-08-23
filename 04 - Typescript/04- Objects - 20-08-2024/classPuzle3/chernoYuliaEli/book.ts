interface Book
{
    title: string;
    author: string;
    publicationYear: number;
    error?: string;
}

function bookHandler(): Book
{
    const title:string | null = prompt("enter book title");
    const author:string | null = prompt("enter book author");
    const publicationYear:number = Number(prompt("enter book publication year"));
    try
    {
        if (!title || !author || !publicationYear)
        {
            throw new Error("invalid book")
        }
        return {title:title, author:author, publicationYear:publicationYear};
    }
    catch (e)
    {
        console.error(e);
        return {title: String(title), author: String(author), publicationYear:publicationYear};
    }   
}

function print_book_info(): void
{
    const book:Book = bookHandler();

    document.write(`the book ${book.title} by ${book.author} was written in ${book.publicationYear}`);
}

print_book_info();

