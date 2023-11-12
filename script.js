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

function submitFormData(event) {
  event.preventDefault();
  formData = new FormData(form);
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