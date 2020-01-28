import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import axios from "axios";


export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios.get("/api/books").then(booksDB => {
            setBooks(booksDB.data);
            console.log(books);
        });
    };

    const renderBooks = () => {
        let bookCards = [];
        if(books.length > 0) {
            bookCards.push(
                books.map(book => {
                    return (
                        <Book
                          key={book._id}
                          _id={book._id}
                          img={book.image}
                          title={book.title}
                          description={book.description}
                          authors={book.authors}
                          link={book.link}
                          button="delete"
                          deleteBook={deleteBook}
                        />
                    );
                })
            );
        } else {
            bookCards.push(<div key="none">There are no saved books</div>);
        }
        return bookCards;
    };

    const deleteBook = bookId => {
        console.log(bookId);
        axios.delete("api/books/" + bookId).then(res => {
            console.log("BOOK DELETED");
            fetchBooks();
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">{renderBooks()}</div>
            </div>
        </div>
    );
}