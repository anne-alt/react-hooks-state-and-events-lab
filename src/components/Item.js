import React, {useState} from "react";

function Item({ name, category }) {
  const [isCart, setCart] = useState('false')

  const cartAdd = isCart ? "" : "in-cart"

  function AddCart() {
    setCart((isCart) => !isCart)

  }


  return (
    <li className={cartAdd}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={AddCart}>{isCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
