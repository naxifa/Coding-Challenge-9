
// Task 1 - Create a Book Class

class Book {
    constructor( title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }

    getDetails() {
        return `${this.title} by author ${this.author}, ISBN - ${this.ISBN}`
    }
// Getter for character name
get isAvailable() {
    return this.isAvailable;
}
    
}