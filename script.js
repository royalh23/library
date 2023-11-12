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

function showDialog() {
  formDialog.showModal();
}

function submitFormData(event) {
  event.preventDefault();
  formData = new FormData(form);
  addBookToLibrary(formData);
  form.reset();
  formDialog.close();
}

const myLibrary = [];

let formData;
const formDialog = document.querySelector("#form-dialog");
const addNewBookBtn = document.querySelector(".add-book");
const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("#form-dialog > form");

addNewBookBtn.addEventListener("click", showDialog);
submitBtn.addEventListener("click", submitFormData);