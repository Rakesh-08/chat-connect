import { useEffect, useState } from "react";
import "./Home.css";
import { Product } from "./Product/Product";
import ShoppingCrousal from "../crousal";
import HealthCrousal from "../crousal";

export default function Home({ searchProduct }) {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);



  useEffect(() => {
    setFetching(true);
    let temp = localStorage.getItem("products");

    if (temp == undefined || temp==null) {
      getAllProducts();
      console.log("fetched");
      
    } else {
      setProducts(JSON.parse(temp));
      console.log("cached");
    }
    setFetching(false);
  }, []);

  let getAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        localStorage.setItem("products",JSON.stringify(data.products))
      })
      .catch((err) => console.log(err));
  };

  if (fetching) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className="home ">
      <div className="header">
        <header> Welcome To your own Market</header>
      </div>
      <div className="mb-4 mt-1">
        <HealthCrousal />
      </div>
      <div className="p-3">
        <h4 className="text-center  m-4 fst-italic">
          Products Available
        </h4>
        <div className="homeRows">
          {products
            ?.filter((i) =>
              i.title.toUpperCase().includes(searchProduct.toUpperCase())
            )
            .map((product) => (
              <div key={product.id} className="homeRow">
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={Math.round(product.rating)}
                  image={product.images}
                  brand={product.brand}
                  description={product.description}
                  stock={product.stock}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="footer">
        <p>Rakesh_Mandal @copyrights2023</p>
      </div>
    </div>
  );
}
