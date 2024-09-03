function getBookDiteails() {
    try {
        var title = prompt("Please enter your book title:");
        var author = prompt("Please enter your book author:");
        var year = Number(prompt("Please enter your book number:"));
        if (!title || !author || !year)
            throw new Error("Invalid input");
        var getBookDiteails_1 = {
            title: title,
            author: author,
            year: year
        };
        console.log(getBookDiteails_1);
        return getBookDiteails_1;
    }
    catch (e) {
        console.error(e);
        return {
            title: "",
            author: "",
            year: 0
        };
    }
}
var Booking = getBookDiteails();
function rederBook(book) {
    document.write("Your Booking details: <br> Title:" + book.title + " <br> Author:" + book.author + " <br> Year:" + book.year);
}
rederBook(Booking);
function getRectangleInfo() {
    try {
        var width = Number(prompt("Width?"));
        var height = Number(prompt("height?"));
        if (!width || !height)
            throw new Error("Invalid Inpur");
        var rectangle_1 = {
            width: width,
            height: height
        };
        console.log(rectangle_1);
        return rectangle_1;
    }
    catch (e) {
        console.error(e);
        return {
            width: 0,
            height: 0
        };
    }
}
var rectangle = getRectangleInfo();
function calcArea(rectangle) {
    return rectangle.width * rectangle.height;
}
var area = calcArea(rectangle);
function rederAreas(size, area) {
    document.write("<br> The Rectangle size is width: " + size.width + " and height: " + size.height + " and the area is: " + area);
}
rederAreas(rectangle, area);
