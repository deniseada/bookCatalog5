import { nanoid } from "nanoid";

function AddBookForm({ add, closeModal }) {
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const book = {
      title: data.get("title") || "",
      author: data.get("author") || "",
      publisher: data.get("publisher") || "",
      year: data.get("year") || "",
      language: data.get("language") || "",
      pages: data.get("pages") || "",
      image: data.get("image") || "",
      url: data.get("url") || "",
      id: nanoid(),
    };

    const newBook = {
      title: book.title,
      author: book.author,
      subtitle: "",
      image: book.image,
      url: book.url,
      id: book.id,
    };

    if (typeof add === "function") add(newBook);

    e.target.reset();

    if (typeof closeModal === "function") {
      closeModal();
    } else {
      const dialog = e.target.closest("dialog");
      if (dialog && typeof dialog.close === "function") dialog.close();
    }
  }

  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Title:</label>
          <input name="title" type="text" placeholder="Book Title.." />
        </div>
        <div className="form-control">
          <label>Author:</label>
          <input name="author" type="text" placeholder="Author.." />
        </div>
        <div className="form-control">
          <label>Publisher:</label>
          <input name="publisher" type="text" placeholder="Publisher.." />
        </div>
        <div className="form-control">
          <label> Publication Year:</label>
          <input name="year" type="number" />
        </div>
        <div className="form-control">
          <label>Language:</label>
          <input name="language" type="text" placeholder="Language.." />
        </div>
        <div className="form-control">
          <label>Pages:</label>
          <input name="pages" type="number" />
        </div>
        <div className="form-control">
          <label>Image URL:</label>
          <input name="image" type="url" placeholder="https://..." />
        </div>
        <button className="btn-save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
