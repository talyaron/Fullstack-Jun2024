var books = [
    {
        name: "curious george",
        year: 2002,
        publisher: "arthur"
    }
];
var myBook = { name: "lala", year: 2024, publisher: "me" };
books.push(myBook);
for (var index = 0; index < books.length; index++) {
    console.log("name : " + books[index].name + "  year: " + books[index].year + " publisher : " + books[index].publisher);
}
