console.log("ITS WORKING");

const myLibrary = [];

function Book(title, author, pages, isRead)  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

//book display window
const bookshelf = document.querySelector("#bookshelf")

function createBookElement (book) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    const close = document.createElement("button");
    close.classList.add("close");
    close.textContent = "x";
    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;
    const readToggle = document.createElement("button");

    if(book.isRead === true){
        readToggle.classList.add("read");
        readToggle.textContent = "Read";
    }else {
        readToggle.classList.add("unread");
        readToggle.textContent = "Unread";
    }

    bookElement.appendChild(close);
    bookElement.appendChild(bookTitle);
    bookElement.appendChild(readToggle);

    bookshelf.appendChild(bookElement);
}

function displayLibrary() {
    //empties div
    bookshelf.textContent = "";

    myLibrary.forEach((book) => createBookElement(book));
}
