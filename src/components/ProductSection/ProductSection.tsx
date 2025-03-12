import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchProducts } from "../../store/features/productSlice";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Handle scroll left
  const handleScrollLeft = () => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      container.scrollBy({ left: -270, behavior: "smooth" }); // Scroll by one card width
    }
  };

  // Handle scroll right
  const handleScrollRight = () => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      container.scrollBy({ left: 270, behavior: "smooth" }); // Scroll by one card width
    }
  };

  return (
    <div className="bg-black py-12">
      <h2 className="text-center text-3xl font-bold text-orange-500">
        Best Selling Products
      </h2>
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        {/* Scroll Left Button */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 text-white rounded-full bg-black/60 hover:bg-black/80 transition-all"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Product List */}
        <motion.div
          className="flex gap-6 py-12 overflow-x-auto scroll-smooth no-scrollbar px-4 scroll-container"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          }}
        >
          {loading ? (
            <p className="text-center w-full text-white">Loading...</p>
          ) : (
            products.map((product) => {
              const productImages = Array.isArray(product.image)
                ? product.image
                : product.image.split(",");
              return (
                <motion.div
                  key={product.id}
                  className="relative min-w-[calc(50%-12px)] max-w-[calc(50%-12px)] md:min-w-[270px] md:max-w-[270px] bg-black text-white rounded-xl p-5 flex-shrink-0 overflow-hidden border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <img
                      src={productImages[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-center">
                      {product.name}
                    </h3>
                    <p className="text-orange-400 text-xl font-bold text-center">
                      ${product.salePrice}
                    </p>
                    <p className="text-gray-400 text-center">
                      {product.bottleSize}ml
                    </p>
                  </Link>
                </motion.div>
              );
            })
          )}
        </motion.div>

        {/* Scroll Right Button */}
        <button
          onClick={handleScrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
