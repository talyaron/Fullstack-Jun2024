var bookCollections = [
    { title: "Dune", author: "George Orwell", year: 1984 },
    {
        title: "Pinocchio",
        author: "Carlo Collodi",
        year: 1883
    },
    { title: "1984", author: "George Orwell", year: 1949 },
];
function writeList(bookCollections) {
    var elements = document.querySelectorAll(".line");
    elements.forEach(function (element, index) {
        if (bookCollections[index].title != null) {
            element.textContent =
                "Name : " + bookCollections[index].title + " -\n      By : " + bookCollections[index].author + " -\n       Publish Year : " + bookCollections[index].year || "";
        }
    });
}
writeList(bookCollections);
