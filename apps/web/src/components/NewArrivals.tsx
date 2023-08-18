import React from "react";
import { Card } from "ui";

const NewArrivals = () => {
  return (
    <div className="mt-10 flex w-5/6 flex-col items-center gap-1 p-5">
      <h2 className="text-3xl font-semibold">Discover New Arrivals</h2>
      <p className="font-light">Recently added clothes!</p>
      <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card imgSrc="/images/product-1.jpg" />
        <Card imgSrc="/images/product-1.jpg" />
        <Card imgSrc="/images/product-1.jpg" />
        <Card imgSrc="/images/product-1.jpg" />
        <Card imgSrc="/images/product-1.jpg" />
        <Card imgSrc="/images/product-1.jpg" />
      </div>
    </div>
  );
};

export default NewArrivals;
