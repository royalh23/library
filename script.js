function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(formData) {
  const book = new Book(formData.get("book-title"),
                        formData.get("book-author"),
                        +formData.get("book-pages"),
                        formData.get("read-status") === "true");
  myLibrary.push(book);
}

function displayBook(book) {
  const bookCard = document.createElement("div");
  const titleContainer = document.createElement("div");
  const authorContainer = document.createElement("div");
  const pagesContainer = document.createElement("div");
  const buttons = document.createElement("div");

  bookCard.classList.add("book-card");
  titleContainer.classList.add("title-container");
  authorContainer.classList.add("author-container");
  pagesContainer.classList.add("pages-container");
  buttons.classList.add("book-buttons");
  
  const title = document.createElement("div");
  const titleValue = document.createElement("div");
  const author = document.createElement("div");
  const authorValue = document.createElement("div");
  const pages = document.createElement("div");
  const pagesValue = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  titleValue.classList.add("title-value");
  authorValue.classList.add("author-value");
  pagesValue.classList.add("pages-value");

  title.textContent = "Title: ";
  titleValue.textContent = `${book.title}`;
  author.textContent = "Author: ";
  authorValue.textContent = `${book.author}`;
  pages.textContent = "Pages: ";
  pagesValue.textContent = `${book.pages}`;
  removeBtn.textContent = "Remove";
  readBtn.textContent = `${book.read ? "Read" : "Not read"}`;

  titleContainer.append(title, titleValue);
  authorContainer.append(author, authorValue);
  pagesContainer.append(pages, pagesValue);
  buttons.append(removeBtn, readBtn);

  bookCard.append(titleContainer, authorContainer, pagesContainer, buttons);
  booksContainer.append(bookCard);
}

function showDialog() {
  formDialog.showModal();
}

function submitFormData(event) {
  event.preventDefault();
  formData = new FormData(form);
  addBookToLibrary(formData);
  displayBook(myLibrary[myLibrary.length-1]);
  form.reset();
  formDialog.close();
}

const myLibrary = [];

let formData;
const formDialog = document.querySelector("#form-dialog");
const addNewBookBtn = document.querySelector(".add-book");
const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("#form-dialog > form");
const booksContainer = document.querySelector(".books-container");

addNewBookBtn.addEventListener("click", showDialog);
submitBtn.addEventListener("click", submitFormData);