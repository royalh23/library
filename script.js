function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  return;
}

function showDialog() {
  formDialog.showModal();
}

const myLibrary = [];

const formDialog = document.querySelector("#form-dialog");
const addNewBookBtn = document.querySelector(".add-book");

addNewBookBtn.addEventListener("click", showDialog);