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
              className=" btn btn-primary  "
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
              className=" btn btn-primary "
            >
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="m-1 p-1 ">
        <h4>{title}</h4>
        <small> Rs. {price}</small>

        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <span key={index}> ★</span>
            ))}
        </div>
        <p className="text-muted">{description}</p>
        <h6>
          Brand : <span className="text-primary">{brand}</span>
        </h6>
        <h6>
          In Stock: <span className="text-success">{stock} units</span>
        </h6>
        <button className="btn btn-danger btn-sm " onClick={removeFromCart}>
          {" "}
          Remove from cart{" "}
        </button>
      </div>
    </div>
  );
}
