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
        var _a, _b, _c;
        if (bookCollections[index].title != null) {
            element.textContent = String("Name : " + ((_a = bookCollections[index]) === null || _a === void 0 ? void 0 : _a.title) + " \n      By : " + ((_b = bookCollections[index]) === null || _b === void 0 ? void 0 : _b.author) + "\n       Publish Year : " + ((_c = bookCollections[index]) === null || _c === void 0 ? void 0 : _c.year) || "");
        }
    });
}
writeList(bookCollections);
