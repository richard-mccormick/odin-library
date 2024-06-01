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
    displayLibrary();
}

//book display window
const bookshelf = document.querySelector("#bookshelf")

function createBookElement(type, content) {
    element = document.createElement("div");
    element.classList.add("book-info");
    element.classList.add(type);
    element.textContent = content;
    return element;
}

function deleteBook(index){
    myLibrary.splice(index, 1);
    displayLibrary();
}

function displayBook (book, index) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const close = document.createElement("button");
    close.classList.add("close");
    close.textContent = "x";
    close.dataset.index = index;
    close.addEventListener("click", () => {
        deleteBook(index);
    }); 

    const title = createBookElement("title", book.title);
    const author = createBookElement("author", book.author);
    const pages = createBookElement("pages", book.pages);

    const readToggle = document.createElement("button");

    if(book.isRead === true){
        readToggle.classList.add("read");
        readToggle.textContent = "Read";
    }else {
        readToggle.classList.add("unread");
        readToggle.textContent = "Unread";
    }

    readToggle.addEventListener("click", () => {
        book.isRead = !(book.isRead);
        if(book.isRead === true){
            readToggle.classList.replace("unread", "read");
            readToggle.textContent = "Read";
        }else {
            readToggle.classList.replace("read", "unread");
            readToggle.textContent = "Unread";
        }
    })

    bookElement.appendChild(close);
    bookElement.appendChild(title);
    bookElement.appendChild(author);
    bookElement.appendChild(pages);
    bookElement.appendChild(readToggle);

    bookshelf.appendChild(bookElement);
}

function displayLibrary() {
    //empties div
    bookshelf.textContent = "";

    for (let i = 0; i < myLibrary.length; i++){
        displayBook(myLibrary[i], i);
    }
}

//Add book form
const bookForm = document.querySelector("#book-form");

function displayForm() {
    bookForm.style.display = "block";
}

function closeForm() {
    bookForm.style.display = "none";
}

const form = document.querySelector("#book-form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");

function bookSubmit(event){
    addBookToLibrary(title.value, author.value, pages.value, readStatus.checked);
    title.value = author.value = pages.value = "";
    readStatus.checked = false;
    closeForm();
    event.preventDefault();
}

form.addEventListener("submit", bookSubmit, true);