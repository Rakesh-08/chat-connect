import { useState,useEffect } from "react";
import { StateContextValue } from "../../context/StateProvider";
import "./Checkout.css";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

export default function Checkout() {
  const [{ cart }] = StateContextValue();
  let NavigateTo = useNavigate();
  let [paymentModal, setPaymentModal] = useState(false)
  
  
  

  let DeliveryCharges = 40;
  let Discount = 0;
  let ExtraCharges = 0;

  const TotalPrice = () => {
    let PreTotal = Math.round(
      cart?.reduce((sum,product) => (sum += product.price), 0)
    );

    let PostTotal = PreTotal - (Discount - DeliveryCharges -ExtraCharges);

    return [PreTotal, PostTotal];
  };

  return (
    <div className="checkout">
      {cart?.length == 0 ? (
        <div className="emptyCart">
          <h1> Your shopping cart is empty</h1>
          <p>
            {" "}
            You have no items in the cart. To add products , click to "add To
            cart " button in the products page.{" "}
            <span style={{cursor:"pointer"}} onClick={() => NavigateTo("/")} className="text-primary">
              back To Home Page
            </span>
          </p>
        </div>
      ) : (
        <div className="checkoutPart">
          <div className="checkoutElements">
            {cart.map(
              ({
                id,
                title,
                image,
                price,
                rating,
                description,
                stock,
                brand,
              }) => (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  image={image[0]}
                  price={price}
                  rating={rating}
                  description={description}
                  brand={brand}
                  stock={stock}
                />
              )
            )}
          </div>

          <div className="m-1 d-flex flex-column">
            {" "}
            <div className="checkoutPrice">
              <h3> Price details </h3>
              <div className="priceDetails">
                <div className="charges">
                  <h4> Selling Price</h4>
                  <p> Rs. {TotalPrice()[0]} </p>
                </div>

                <div className="charges">
                  <h4> Discount</h4>
                  <p>{Discount ? `Rs. ${Discount} ` : "Not available"} </p>
                </div>

                <div className="charges">
                  <h4>Extra charges</h4>
                  <p> Rs. {ExtraCharges} </p>
                </div>

                <div className="charges">
                  <h4> Delivery charges</h4>
                  <p>
                    {DeliveryCharges
                      ? `Rs. ${DeliveryCharges} `
                      : "Free Delivery"}{" "}
                  </p>
                </div>

                <div className="finalPrice ">
                  <h4> Total price</h4>
                  <p> Rs. {TotalPrice()[1]} </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setPaymentModal(true)}
              className="btn btn-success rounded-lg m-2 mt-5 p-2"
            >
              &#8377; Payment
            </button>
          </div>

          <Modal
            show={paymentModal}
            onHide={() => setPaymentModal(false)}
            centered
            backdrop="static"
          >
            <Modal.Body>
              <div className="d-flex flex-column">
                <label
                  className="mb-3 fst-italic fw-bold "
                  htmlFor="paymentMode"
                >
                  Choose the payment method:
                </label>
                <p>
                  <input type="radio" name="paymentMode" />{" "}
                  <img
                    className="payLogo"
                    src="https://i.pinimg.com/736x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg"
                  />{" "}
                  Phonepe
                </p>
                <p>
                  {" "}
                  <input type="radio" name="paymentMode" />
                  <img
                    className="payLogo"
                    src="https://i.pinimg.com/736x/f6/60/a6/f660a637c5ea8ef2b00218bac3479c82.jpg"
                  />{" "}
                  Google pay
                </p>
                <p>
                  {" "}
                  <input type="radio" name="paymentMode" />
                  <img
                    className="payLogo"
                    src="https://content.pymnts.com/wp-content/uploads/2020/01/amazon-pay.png"
                  />{" "}
                  Amazon pay
                </p>
                <p>
                  {" "}
                  <input type="radio" name="paymentMode" />{" "}
                  <img
                    className="payLogo"
                    src="https://brand.mastercard.com/content/dam/mccom/brandcenter/Home%20Page/mc_bc_debit_splash-choice_debit.png"
                  />{" "}
                  Debit card
                </p>
                <p>
                  {" "}
                  <input type="radio" name="paymentMode" />{" "}
                  <img
                    className="payLogo"
                    src="https://www.vhv.rs/dpng/d/17-175065_atm-card-logo-png-transparent-png.png"
                  />{" "}
                  Credit card
                </p>

                <div className="my-3 d-flex justify-content-end">
                  <button
                    onClick={() => setPaymentModal(false)}
                    className="btn btn-secondary m-1"
                  >
                    cancel
                  </button>
                  <button
                      onClick={() => {
                        alert("Payment Successfull")
                         setPaymentModal(false);
                      }}
                    className="btn btn-primary m-1"
                  >
                    confirm
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}
