import { motion } from "framer-motion";

const products = [
  {
    name: "Luxurious Elixir Rough",
    price: "$220.00",
    volume: "100ml",
    image: "/images/elixir-rough.png", // Replace with actual image path
  },
  {
    name: "The Golden Legacy",
    price: "$160.00",
    volume: "100ml",
    image: "/images/golden-legacy.png",
  },
  {
    name: "Luxurious Elixir",
    price: "$250.00",
    volume: "100ml",
    image: "/images/luxurious-elixir.png",
  },
  {
    name: "Luxurious Essence",
    price: "$260.00",
    volume: "100ml",
    image: "/images/luxurious-essence.png",
  },
];

const ProductSection = () => {
  return (
    <div className="bg-black py-12">
      <h2 className="text-center text-3xl font-semibold text-orange-500 mb-8">
        Best selling products
      </h2>
      <div className="flex justify-center gap-6 overflow-x-auto px-4 scrollbar-hide">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-4 w-64 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-white mt-4 text-lg">{product.name}</h3>
            <p className="text-orange-500 font-semibold">{product.price}</p>
            <p className="text-gray-400 text-sm">{product.volume}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
