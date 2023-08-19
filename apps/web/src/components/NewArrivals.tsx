import React from "react";
import { Product } from "types";
import { Button, Card } from "ui";

const NewArrivals = async () => {
  const products: Product[] = await fetch(
    `http://localhost:5001/api/product`
  ).then((data) => data.json());
  return (
    <div className="mt-10 flex w-5/6 flex-col items-center gap-1 p-5">
      <h2 className="text-3xl font-semibold">Discover New Arrivals</h2>
      <p className="font-light">Recently added clothes!</p>
      <Button />
      <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product._id}
            title={product.title}
            price={500}
            imgSrc={`/images/product-${product.imgUrl}.jpg`}
          />
        ))}
        <Card
          title="Plain White Shirt"
          price={500}
          imgSrc="/images/product-1.jpg"
        />
        <Card
          title="Yello Jumper"
          price={2000}
          imgSrc="/images/product-2.jpg"
        />
        <Card
          title="Plain White Shirt"
          price={500}
          imgSrc="/images/product-1.jpg"
        />
        <Card
          title="Yello Jumper"
          price={2000}
          imgSrc="/images/product-2.jpg"
        />
        <Card
          title="Plain White Shirt"
          price={500}
          imgSrc="/images/product-1.jpg"
        />
        <Card
          title="Yello Jumper"
          price={2000}
          imgSrc="/images/product-2.jpg"
        />
      </div>
    </div>
  );
};

export default NewArrivals;
