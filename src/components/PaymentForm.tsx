// interface FormData {
//   email: Text;
//   amount: number;
// }
import PaymentButton from "./PaymentButton";
import SummaryItem from "./SummaryItem";
import Item from "./Item";
import "../App.css";
const basketCost = 5000; //this could be the packaging cost, to build all the items into a basket
const deliveryCost = 5000; //cost of delivering the basket
const userEmail = "email@gmail.com"; //email of user
//this stores the props for each Item in the Cart
const items = [
  {
    name: "Teddy Bear",
    img: "https://img.freepik.com/premium-psd/cute-teddy-bear-with-pink-bow_191095-59855.jpg?semt=ais_hybrid&w=740&q=80",
    price: 10000,
    quantity: 1,
    alt: "Teddy Bear",
  },
  {
    name: "Pookie Pink Beaded Bracelet",
    img: "https://i.pinimg.com/736x/b6/46/61/b64661e2753b1dd8b6707b1f74b128f5.jpg",
    price: 2000,
    quantity: 2,
    alt: "Pink Beaded Bracelet",
  },
  {
    name: "Dune Milk Chocolate Bar",
    img: "https://dune.ng/wp-content/uploads/2024/06/Milk-100g-bar-visual-angledl.png",
    price: 2000,
    quantity: 2,
    alt: "Milk Chocolate Bar",
  },
  {
    name: "Veleta Sparkling Fruit Wine",
    img: "https://www.supermart.ng/cdn/shop/files/spar0360_veleta_grape_juice_red_75_cl.jpg?v=1689076841",
    price: 5000,
    quantity: 1,
    alt: "Sparkling Fruit Wine",
  },
];
//to calculate the total of all the items
const Subtotal = items.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
//The Checkout/Payment Form
const PaymentForm = () => {
  return (
    <div className="card">
      <h2>Your Cart</h2>
      <div className="item-holder">
        {items.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </div>
      <div className="summary">
        <SummaryItem name="Subtotal" value={Subtotal} />
        <SummaryItem name="Basketing Cost" value={basketCost} />
        <SummaryItem name="Delivery Fee" value={deliveryCost} />
        <SummaryItem
          name="Total"
          value={deliveryCost + basketCost + Subtotal}
        />
      </div>
      <PaymentButton
        userEmail={userEmail}
        amount={deliveryCost + basketCost + Subtotal}
      />
    </div>
  );
};

export default PaymentForm;
