import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useState, useEffect, useMemo } from "react";
import { fetchProductById } from "../../store/productSlice"; // API call action
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  // Fetch product from Redux store
  const product = useAppSelector((state) =>
    state.products.products.find((p) => p.id === id)
  );

  // If product is not in Redux, fetch it from API
  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id, product]);

  if (!product) return <p className="text-center text-white">Loading...</p>;

  // Handle product images
  const productImages = useMemo(() => {
    if (!product.image) return [];
    return Array.isArray(product.image)
      ? product.image
      : product.image.split(",").map((img) => img.trim());
  }, [product.image]);

  const [selectedImage, setSelectedImage] = useState(productImages[0] || "");

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 lg:px-16 py-10">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Left: Product Image */}
        <div className="flex flex-col items-center">
          {/* Large Image */}
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt={product.name}
            className="w-[350px] h-auto md:w-[400px] lg:w-[450px] rounded-lg object-cover mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Thumbnails Below Description & Price */}
          <motion.div className="flex gap-2 justify-start mt-4">
            {productImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all ${
                  selectedImage === img
                    ? "border-2 border-orange-400"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setSelectedImage(img)}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Right: Product Info */}
        <motion.div variants={fadeIn}>
          <motion.h1 className="text-3xl font-bold">{product.name}</motion.h1>
          <motion.p className="text-gray-400 mt-2">
            {product.description}
          </motion.p>

          {/* Bottle Size */}
          <motion.div className="mt-4">
            <p className="text-gray-400">
              Bottle Size:{" "}
              <span className="text-white font-semibold">
                {product.bottleSize} ml
              </span>
            </p>
          </motion.div>

          {/* Price */}
          <motion.div className="flex items-center gap-2 mt-4">
            <span className="text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="text-orange-400 text-2xl font-bold">
              ${product.salePrice}
            </span>
          </motion.div>

          {/* Stock & Category */}
          <motion.div className="mt-4">
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
          </motion.div>

          {/* Add to Bag */}
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 w-full px-6 py-3 rounded-xl font-semibold mt-6"
            whileHover={{ scale: 1.05 }}
          >
            Add to Bag
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Product Details Section */}
      <motion.div className="mt-10 border-t border-gray-700 pt-6">
        <h2 className="text-xl font-semibold">Product Details</h2>
        <p className="text-gray-400 mt-2 leading-relaxed">
          {product.details ||
            "No additional details available for this product."}
        </p>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
