interface ItemProps {
  img: string;
  name: string;
  alt: string;
  price: number;
  quantity: number;
}
//this function renders items
function Item(props: ItemProps) {
  return (
    <>
      <div className="item">
        <div className="img-holder">
          <img src={props.img} alt="Dune Milk Chocolate bar" />
        </div>
        <div>
          <div>
            <p>{props.name}</p>
            <p className="quantity">x {props.quantity}</p>
          </div>
          <p>₦ {props.price}</p>
        </div>
      </div>
      <p></p>
    </>
  );
}
export default Item;
