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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-20 mt-6">
      {products.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
