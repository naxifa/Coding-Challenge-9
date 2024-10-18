
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
