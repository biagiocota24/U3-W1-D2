// import { Card, Button } from "react-bootstrap";

// const SingleBook = function ({book}) {
//   return (
//     <Card className="h-100 bg-dark text-light">
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body className="d-flex flex-column">
//         <Card.Title className="">{book.title}</Card.Title>
//         <Card.Text className="mb-auto">{book.category} book</Card.Text>
//         <Button variant="success">{book.price}€</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default SingleBook;

import { Component } from "react";
import { Card, Button,Alert } from "react-bootstrap";


class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { book } = this.props;
    return (
      <div>
        <Card
          className="mb-3  bg-dark text-light"
          onClick={() => {
            this.setState({ selected: !this.state.selected });
          }}
          style={{ border: this.state.selected ? "2px solid red" : "none" }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="">{book.title}</Card.Title>
            <Card.Text className="mb-auto">{book.category} book</Card.Text>
            <Button variant="success">{book.price}€</Button>
          </Card.Body>
        </Card>
        {this.state.selected === true && (
          <Alert variant="danger" className="text-dark">
            SELEZIONATO
          </Alert>
        )}
      </div>
    );
  }
}

export default SingleBook;
