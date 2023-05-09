import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);
  const products = [
    {
      image: "https://m.media-amazon.com/images/I/61j99uUfXNL._SX679_.jpg",
      model: "Samsung Galaxy",
      ram: "12gb",
      price: 20000,
    },
    {
      image:
        "https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg",
      model: "Iphone 14",
      ram: "8gb",
      price: 85000,
    },
    {
      image:
        "https://images.hindustantimes.com/tech/htmobile4/P38122/images/Design/152461-v1-oppo-a77-2022-128gb-mobile-phone-large-4.jpg",
      model: "Oppo 5G",
      ram: "12gb",
      price: 33000,
    },
    {
      image: "https://m.media-amazon.com/images/I/61MBRtrVz9L._SL1500_.jpg",
      model: "Google Pixel 10",
      ram: "12gb",
      price: 42000,
    },
  ];
  const addCart = function () {
    setCart(cart + 1);
    console.log(cart);
  };
  const removeCart = function () {
    setCart(cart - 1);
  };
  return (
    <div className="App">
      <div className="header">
        <Container>
          <Row>
            <Col xs lg={6}>
              <h1 className="display-2">Shopping App</h1>
              <p className="desc">
                You can add products to cart and when there is product in cart,
                Remove Cart button is enabled
              </p>
            </Col>
            <Col xs lg={1}>
              <p className="cart-data">Cart: {cart}</p>
            </Col>
            <Col xs lg={3}>
              {cart > 0 ? (
                <Button variant="primary" onClick={() => removeCart()}>
                  Remove from Cart
                </Button>
              ) : (
                <Button variant="primary" disabled>
                  Remove from Cart
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          {products.map((prod, idx) => (
            <Col key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title>{prod.model}</Card.Title>
                  <h5>₹ {prod.price}</h5>

                  <Button variant="primary" onClick={() => addCart()}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
