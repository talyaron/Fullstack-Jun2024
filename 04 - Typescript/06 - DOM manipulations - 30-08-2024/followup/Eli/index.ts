interface Book {
  title: String;
  author: String;
  year: Number;
}

const bookCollections: Book[] = [
  { title: "Dune", author: "George Orwell", year: 1984 },
  {
    title: "Pinocchio",
    author: "Carlo Collodi",
    year: 1883,
  },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function writeList(bookCollections: Book[]) {
  const elements = document.querySelectorAll(
    ".line"
  ) as NodeListOf<HTMLElement>;

  elements.forEach((element, index) => {
    if (bookCollections[index].title != null) {
      element.textContent = String(
        `Name : ${bookCollections[index]?.title} 
      By : ${bookCollections[index]?.author}
       Publish Year : ${bookCollections[index]?.year}` || ""
      );
    }
  });
}

writeList(bookCollections);
