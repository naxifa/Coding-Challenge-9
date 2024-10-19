
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
    return this.isAvailable;
}

// Setter for availability of the book
set isAvailable(availability) {
    if (typeof availability === 'boolean') {
        this.isAvailable = availability;
    } else {
        console.error("Invalid input - Availability has to be a boolean.");
    }
}
}


// Task 2 - Create a Section Class

class Section {
    constructor( name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } else {
            console.error("Only a valid Book instance can be added.");
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
}

