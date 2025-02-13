import React from "react";

const products = [
  {
    name: "Luxurious Elixir Rough",
    price: "$220.00",
    volume: "100ml",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "The Golden Legacy",
    price: "$160.00",
    volume: "100ml",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Luxurious Elixir",
    price: "$250.00",
    volume: "100ml",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Luxurious Essence",
    price: "$260.00",
    volume: "100ml",
    img: "https://via.placeholder.com/150",
  },
];

const ProductSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-black items-center">
      <div className="w-full max-w-6xl p-6 rounded-lg ">
        <h2 className="text-center text-orange-500 text-3xl font-semibold mb-6">
          Best Selling Products
        </h2>
        <div className="relative flex space-x-6 p-4 overflow-hidden">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-[#1C1C1C] p-6 rounded-lg text-white text-center "
            >
              <img
                src={product.img}
                alt={product.name}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg">{product.name}</h3>
              <p className="text-orange-500 text-sm">
                {product.price} | {product.volume}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
