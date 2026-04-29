// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import fantasyBooks from "../assets/BOOKS/fantasy.json";
// import horrorBooks from "../assets/BOOKS/horror.json";
// import romanceBooks from "../assets/BOOKS/romance.json";
// import scifiBooks from "../assets/BOOKS/scifi.json";
// import historyBooks from "../assets/BOOKS/history.json";
// const allTheBooks = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks].sort(() => Math.random() - 0.5);
// import { Container, Row, Col } from "react-bootstrap";

// class MyBookCard extends React.Component {
//   render() {
//     return (
//       <Container fluid>
//         <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-8 gy-3 gx-3">
//           {allTheBooks.map((book) => (
//             <Col key={book.asin}>
//               <Card className="h-100 bg-dark text-light">
//                 <Card.Img variant="top" src={book.img} />
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Title className="">{book.title}</Card.Title>
//                   <Card.Text className="mb-auto">{book.category} book</Card.Text>
//                   <Button variant="success">{book.price}€</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     );
//   }
// }

// export default MyBookCard;
