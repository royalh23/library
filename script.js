class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
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

  const title = document.createElement("div");
  const titleValue = document.createElement("div");
  const author = document.createElement("div");
  const authorValue = document.createElement("div");
  const pages = document.createElement("div");
  const pagesValue = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  title.textContent = "Title: ";
  titleValue.textContent = `${book.title}`;
  author.textContent = "Author: ";
  authorValue.textContent = `${book.author}`;
  pages.textContent = "Pages: ";
  pagesValue.textContent = `${book.pages}`;
  removeBtn.textContent = "Remove";
  readBtn.textContent = `${book.read ? "Read" : "Not read"}`;

  bookCard.classList.add("book-card");
  titleContainer.classList.add("book-component");
  authorContainer.classList.add("book-component");
  pagesContainer.classList.add("book-component");
  buttons.classList.add("book-buttons");

  titleValue.classList.add("center-card-value");
  authorValue.classList.add("center-card-value");
  pagesValue.classList.add("center-card-value");
  removeBtn.classList.add("remove-btn");
  removeBtn.dataset.index = `${myLibrary.indexOf(book)}`;
  readBtn.classList.add("status-btn");
  if (readBtn.textContent === "Read") readBtn.classList.add("read");

  titleContainer.append(title, titleValue);
  authorContainer.append(author, authorValue);
  pagesContainer.append(pages, pagesValue);
  buttons.append(removeBtn, readBtn);

  bookCard.append(titleContainer, authorContainer, pagesContainer, buttons);
  booksContainer.append(bookCard);

  const removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach(removeBtn => removeBtn.addEventListener("click",
                                                              removeBook));

  const readBtns = document.querySelectorAll(".status-btn");
  readBtns.forEach(readBtn => readBtn.addEventListener("click", changeStatus));
}

function removeBook(e) {
  myLibrary.splice(e.target.dataset.index, 1);
  booksContainer.textContent = "";
  myLibrary.forEach(book => displayBook(book));
}

function changeStatus(e) {
  e.target.classList.toggle("read");
  if (e.target.textContent === "Read") e.target.textContent = "Not read";
  else e.target.textContent = "Read";
}

function showDialog() {
  formDialog.showModal();
}

function closeDialog() {
  form.reset();
  formDialog.close();
}

function submitFormData(event) {
  if (form.checkValidity()) {
    event.preventDefault();
    formData = new FormData(form);
    addBookToLibrary(formData);
    booksContainer.textContent = "";
    myLibrary.forEach(book => displayBook(book));
    form.reset();
    formDialog.close();
  }
}

const myLibrary = [];

let formData;
const formDialog = document.querySelector("#form-dialog");
const addNewBookBtn = document.querySelector(".add-book");
const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const form = document.querySelector("#form-dialog > form");
const booksContainer = document.querySelector(".books-container");

addNewBookBtn.addEventListener("click", showDialog);
submitBtn.addEventListener("click", submitFormData);
cancelBtn.addEventListener("click", closeDialog);