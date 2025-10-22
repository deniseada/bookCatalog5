import { useState } from "react";
import Books from "./book";
import "./index.css";
import data from "./data/books.json";
import AddBookForm from "./components/AddBookForm";
import Modal from "./components/Modal";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function addBook(book) {
    setBooks((prev) => [book, ...prev]);
  }

  function selectBook(id) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function deleteSelected() {
    if (!selectedId) return;
    setBooks((prev) => prev.filter((b) => b.id !== selectedId));
    setSelectedId(null);
  }

  return (
    <div className="container">
      <h1>Book Catalog</h1>
      <div className="actions">
        <div className="bookContainers">
          <div className="newBook">
            <Modal btnLabel="+" btnClassName="btn-plus">
              <AddBookForm add={addBook} />
            </Modal>
            <div className="controls">
              <button className="edit">Edit</button>
              <button className="delete" onClick={deleteSelected}>
                Delete
              </button>
            </div>
          </div>

          <div className="books">
            {books.map((book, i) => (
              <Books
                {...book}
                key={book.id || book.isbn13 || i}
                isSelected={selectedId === book.id}
                onSelect={selectBook}
              />
            ))}
          </div>
        </div>
      </div>
      <footer> @ 2025 Denise Aquino</footer>
    </div>
  );
}

export default App;
