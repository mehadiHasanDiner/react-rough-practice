import React, { useEffect, useState } from "react";
import Product from "../Prodcut/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // .catch((err) => console.error(err));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 gap-4 sm:mx-20 mt-6">
      {products.slice(0,3).map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
