import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchProducts } from "../../store/features/productSlice";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-black">
      <div className="container px-4 md:px-8 mx-auto lg:px-16 flex items-center justify-between bg-black">
        <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 text-white rounded-full bg-black/60 hover:bg-black/80 transition-all">
          <FaChevronLeft size={20} />
        </button>

        <motion.div
          className="flex gap-6 py-12 overflow-x-hidden scroll-smooth no-scrollbar px-4"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loading ? (
            <p className="text-center w-full text-white">Loading...</p>
          ) : (
            products.map((product) => (
              <motion.div
                key={product.id}
                className="relative min-w-[270px] max-w-[270px] bg-white/10 text-white rounded-xl p-5 flex-shrink-0 overflow-hidden backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <p className="text-orange-400 text-xl font-bold">
                    ${product.salePrice}
                  </p>
                  <p className="text-gray-400">{product.bottleSize}ml</p>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>

        <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
