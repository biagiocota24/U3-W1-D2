import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { FaSearch } from "react-icons/fa";

const BookList = function ({ books }) {
  const [query, setQuery] = useState("");
  const booksSearched = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase()) ||
     book.price < Number(query)
  );
  return (
    <Container fluid>
      <Row>
        <Col className="text-center pt-2 pb-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca un libro..."
          />
          <button>
            <FaSearch />
          </button>
        </Col>
      </Row>
      <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-8 gy-3 gx-3">
        {booksSearched.map((book) => {
          return (
            <Col key={book.asin}>
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
