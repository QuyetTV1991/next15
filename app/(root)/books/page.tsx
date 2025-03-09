async function Books() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <main>
      {books.map((book: { id: number; name: string }) => (
        <h3 key={book.id}>{book.name}</h3>
      ))}
    </main>
  );
}

export default Books;
