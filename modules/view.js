export const displayBooks = document.querySelector('#display_list');
export const displayForm = document.querySelector('#display_form');
export const contact = document.querySelector('#contact');
export const displayContact = document.querySelector('#display_contact');

export const addBookList = document.querySelector('#form');

const bookItems = document.querySelector('#book-list');
const awesomeHeading = document.querySelector('#awesome');

export const showOnlyForm = () => {
  addBookList.style.display = 'flex';
  awesomeHeading.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'none';
};
export const showBooksOnly = () => {
  addBookList.style.display = 'none';
  contact.style.display = 'none';
  awesomeHeading.style.display = 'block';
  bookItems.style.display = 'flex';
};

contact.innerHTML = `<h2>
        Contact information
        </h2>
        <p> Do you have any questions or you just want to say "Hello"
          <br>You can reach out to us!
          </p>
        <ul>
          <li>Our email:mail@mail.com</li>
          <li>Our Phone number:004386534422</li>
          <li>Our address:Streetname 22,88273 Islamabad,Pakistan </li>
        </ul>`;

export function showOnlyContact() {
  addBookList.style.display = 'none';
  awesomeHeading.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'flex';
}
