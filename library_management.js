
// Task 1 - Create a Book Class

class Book {
    constructor( title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    // Getter for book,author and ISBN details
    getDetails() {
        return `${this.title} by author ${this.author}, ISBN - ${this.ISBN}`
    }
    // Getter for if the book is available
    get isAvailable() {
    return this._isAvailable;
}

    // Setter for availability of the book
    set isAvailable(availability) {
    if (typeof availability === 'boolean') {
        this._isAvailable = availability;
    } else {
        console.error("Invalid input - Availability has to be a boolean.");
    }
    }
}


// Task 2 & 5 - Create a Section Class & Handle Books Borrowing and Returning

class Section {
    constructor( name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } else {
            console.error("Enter valid name");
        }
    }
    
    // Finding the number of books available 
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    // Method to list all books with their availability status
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.getDetails()} - Available: ${book.isAvailable}`);
    });
    }

    // Calculates total number of books available for borrowing in the section
    calculateTotalBooksAvailable() {

        // Filter and count the books that are currently available
        let availableBooksCount = this.books.filter(book => book.isAvailable).length;

        console.log(`Total available books in ${this.name}: ${availableBooksCount}`);

        return availableBooksCount;
    }

}



// Task 3 - Create a Patron Class

class Patron {
    constructor( name ) {
        this.name = name; 
        this.borrowedBooks = [];
    }


    borrowBook(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log(`Name: ${this.name}, Book borrowed: ${book.title}`);
        }

        else (console.log("This book is currently unavailable"))
    }


    returnBook(book) {
        book.isAvailable = true; // Set the book as available
        this.borrowedBooks = this.borrowedBooks.filter(borrowedBook => borrowedBook !== book); // Remove the book from borrowedBooks array
        console.log(`Name: ${this.name}, Book returned: ${book.title}`);
    }
}


// Task 4 -  Create a VIPPatron Class that Inherits from Patron


class VIPPatron extends Patron {
    constructor (name) {
        super(name) // Calling the parent class constructor
        this.priority = true  
        // All VIP patrons will have priority by default
    }

    // Overriding the borrowBook method to handle priority borrowing
    borrowBook(book) {
        if (book.isAvailable) {
            super.borrowBook(book); // If the book is available, borrow it as usual
        } else {
            console.log(`VIP: ${this.name}, Priority request: "${book.title}" by ${book.author}.`);
        }
}}


// Task 6 - Calculate total available books in the section

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");
    
// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);

// List books and availability
fiction.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);