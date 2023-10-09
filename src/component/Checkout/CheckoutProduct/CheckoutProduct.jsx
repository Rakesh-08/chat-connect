import { StateContextValue } from "../../../context/StateProvider";
import "./CheckoutProduct.css";
import { useState } from "react";


export default function CheckoutProduct({ id, title, price, image, rating,description,brand,stock }) {
  const [_, dispatch] = StateContextValue();
  let [quantity, setQuantity] = useState(1);
 

  const removeFromCart = () => {
    dispatch({
      type: "RemoveFromCart",
      id: id,
    });
  };
  

  return (
    <div className="checkoutProduct d-flex">
      <div>
        <img className="checkoutProductImage" src={image} />
        <div className="quantityContainer mt-4 p-1">
          <p className="fw-bold mx-auto ">{quantity}</p>
          <div className="itemQuantity mx-auto">
            <button
              
              onClick={(e) => {
                let temp = quantity;
                if (temp >= stock) {
                  return
                }
                setQuantity(temp+1)
              }}
              className=" btn btn-primary btn-sm"
            >
              {" "}
              +{" "}
            </button>
            <p className="fst-italic mx-1"> Quantity </p>
            <button
             
              onClick={(e) => {
                let temp = quantity
                if (temp <=1) {
                  return
                }
                setQuantity(temp-1)
              }}
              className=" btn btn-primary btn-sm"
            >
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="m-2 p-2 ">
        <h4>{title}</h4>
        <small> Rs. {price}</small>

        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <p key={index}> ★</p>
            ))}
        </div>
        <p className="text-muted">{description}</p>
        <p>
          Brand : <span className="text-primary">{brand}</span>
        </p>
        <p>
          In Stock: <span className="text-success">{stock} units</span>
        </p>
        <button className="btn btn-danger " onClick={removeFromCart}>
          {" "}
          Remove from cart{" "}
        </button>
      </div>
    </div>
  );
}
