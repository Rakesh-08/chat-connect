import { useEffect, useState } from "react";
import "./Home.css";
import { Product } from "./Product/Product";

export default function Home({ searchProduct }) {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);


  useEffect(() => {
   setFetching(true)
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
      })
      .catch((err) => console.log(err));
    
    setFetching(false)
  }, []);

 if(fetching){
     return (
      <h1>...Loading</h1>
    )
  }

  return (
    <div className="home">

      <div className='header'>
        <header> Welcome To your own Market</header>
      </div>
      <div className="homeRows">
        {products?.filter((i) =>
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
              />
            </div>
          ))}
      </div>
      <div className="footer">
        <p>Rakesh_Mandal @copyrights2023</p>
      </div>
    </div>
  );
}
