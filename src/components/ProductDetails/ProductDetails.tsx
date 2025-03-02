import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useAppSelector((state) =>
    state.products.products.find((p) => p.id === id)
  );

  if (!product)
    return <p className="text-center text-white">Product not found</p>;

  // Convert image string to an array (assuming images are stored as a comma-separated string)
  const productImages = product.image
    ? product.image.split(",").map((img) => img.trim())
    : [];

  const [selectedImage, setSelectedImage] = useState(productImages[0] || "");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    quantity > 1 && setQuantity((prev) => prev - 1);

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-[350px] h-auto md:w-[400px] lg:w-[450px] rounded-lg object-cover"
            />
          </div>

          <div className="flex gap-4 justify-center mt-4">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all ${
                  selectedImage === img
                    ? "border-2 border-orange-400"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-400 mt-2">{product.description}</p>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="text-orange-400 text-2xl font-bold">
              ${product.salePrice}
            </span>
          </div>

          <div className="mt-4">
            <p className="text-gray-400">
              Size:{" "}
              <span className="text-white font-semibold">
                {product.bottleSize} ml
              </span>
            </p>
            <p className="text-gray-400">
              Stock:{" "}
              <span className="text-white font-semibold">
                {product.stock} available
              </span>
            </p>
            <p className="text-gray-400">
              Category:{" "}
              <span className="text-white font-semibold">
                {product.category}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-600 px-4 py-2 rounded-md">
              <button className="text-lg px-2" onClick={decreaseQuantity}>
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button className="text-lg px-2" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold">
              ❤️ Wish List
            </button>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 w-full px-6 py-3 rounded-xl font-semibold mt-6">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
