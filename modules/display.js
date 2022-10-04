const addBookList = document.querySelector('#form');
export const contact = document.querySelector('#contact');

export const getBooks = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

export class displayBooksControl {
  static displayBooks() {
    addBookList.style.display = 'none';
    contact.style.display = 'none';

    const books = getBooks();
    books.forEach((book) => {
      displayBooksControl.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const bookList = document.querySelector('.book-list');

    bookList.innerHTML += `    <div class="book_number">
    <li>${book.title} by ${book.author}</li> <br />
    <li><button class="remove-btn" >Remove</button></li>
    </div>
    `;
  }

  static deleteBook(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export const addBook = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

export const removeBook = () => {
  const books = getBooks();
  books.forEach((book, index) => {
    if (book.title) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
};
