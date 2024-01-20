import { StateContextValue } from "../../../context/StateProvider";
import "./Product.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate }from "react-router-dom"

function Product({ id, title, price, image, rating,brand,description,stock  }) {
  const [{ cart }, dispatch] = StateContextValue();
  let [showModal, setShowModal] = useState(false)
  
  let NavigateTo = useNavigate();

   
  const addToCart = () => {
  
    let alreadyAdded = cart.find(i => i.id == id);
    if (alreadyAdded) {
      alert("Product already added in your cart")
      return;
    }
    dispatch({
      type: "AddToCart",
      payload: { id, title, price, image, rating ,brand,description,stock},
    });

    setShowModal(true)
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p> {title} </p>
        <p className="productPrice">
          <strong> &#8377; </strong>
          <span> {price} </span>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <p key={index}> ★</p>
            ))}
        </div>
      </div>

      <img src={image[0]} alt="product" />
      <button onClick={addToCart}> add to cart </button>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
      
        <Modal.Body className="border border-warning  rounded">
          <div >
            <p>{`${title} added into your card`}</p>
            <button onClick={()=>NavigateTo("/checkout")} className="btn btn-outline-success m-1">Proceed to checkout</button>
            <button onClick={()=>setShowModal(false)} className="btn btn-outline-info m-1">Continue shopping</button>
                     </div>
        </Modal.Body>
        
        </Modal>
    </div>
  );
}

export { Product };
