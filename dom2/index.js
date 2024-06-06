let books = [
  {
    isbn: 195153448,
    bookTitle: "Classical Mythology",
    bookAuthor: "Mark P. O. Morford",
    publisher: "Oxford University Press",
    yearOfPublication: 2002,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 2005018,
    bookTitle: "Clara Callan",
    bookAuthor: "Richard Bruce Wright",
    publisher: "HarperFlamingo Canada",
    yearOfPublication: 2001,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 60973129,
    bookTitle: "Decision in Normandy",
    bookAuthor: "Carlo D'Este",
    publisher: "HarperPerennial",
    yearOfPublication: 1991,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0060973129.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0060973129.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0060973129.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 374157065,
    bookTitle:
      "Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
    bookAuthor: "Gina Bari Kolata",
    publisher: "Farrar Straus Giroux",
    yearOfPublication: 1999,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 393045218,
    bookTitle: "The Mummies of Urumchi",
    bookAuthor: "E. J. W. Barber",
    publisher: "W. W. Norton &amp; Company",
    yearOfPublication: 1999,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 399135782,
    bookTitle: "The Kitchen God's Wife",
    bookAuthor: "Amy Tan",
    publisher: "Putnam Pub Group",
    yearOfPublication: 1991,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0399135782.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0399135782.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0399135782.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 425176428,
    bookTitle:
      "What If?: The World's Foremost Military Historians Imagine What Might Have Been",
    bookAuthor: "Robert Cowley",
    publisher: "Berkley Publishing Group",
    yearOfPublication: 2000,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg",
    },
  },
  {
    isbn: 671870432,
    bookTitle: "PLEADING GUILTY",
    bookAuthor: "Scott Turow",
    publisher: "Audioworks",
    yearOfPublication: 1993,
    imageUrls: {
      small: "http://images.amazon.com/images/P/0671870432.01.THUMBZZZ.jpg",
      medium: "http://images.amazon.com/images/P/0671870432.01.MZZZZZZZ.jpg",
      large: "http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg",
    },
  },
];
const booksContainer = document.getElementById('books');

books.forEach(book => {
    booksContainer.innerHTML += `
        <div class="book">
            <div class="book-image">
                <img src="${book.imageUrls.medium}" alt="book-image">
            </div>
            <div class="book-info">
                <p>ISBN: ${book.isbn}</p>
                <p>Title: ${book.bookTitle}</p>
                <p>Author: ${book.bookAuthor}</p>
                <p>Year of publication: ${book.yearOfPublication}</p>
            </div>
        </div>
    `;
});
