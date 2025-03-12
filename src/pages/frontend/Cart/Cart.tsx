import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../../store/features/cartSlice";
import { motion, AnimatePresence } from "framer-motion";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const totalPrice = items.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    dispatch(clearCart());
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <h1 className="text-2xl text-center sm:text-4xl font-bold text-orange-500 mb-6 sm:mb-8">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-xl text-gray-400">No products added to cart</p>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col lg:flex-row gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex-1 space-y-4 sm:space-y-6">
              <AnimatePresence>
                {items.map((item) => {
                  const productImages = Array.isArray(item.image)
                    ? item.image
                    : item.image.split(",");
                  const firstImage = productImages[0];

                  return (
                    <motion.div
                      key={item.id}
                      className="flex items-center justify-between bg-gray-800 p-3 sm:p-4 rounded-lg"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src={firstImage}
                          alt={item.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
                        />
                        <div>
                          <p className="text-sm sm:text-lg font-semibold">
                            {item.name}
                          </p>
                          <p className="text-xs sm:text-sm text-orange-400">
                            ${item.salePrice}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-center border border-gray-600 px-2 sm:px-4 py-1 sm:py-2 rounded-md">
                          <button
                            className="text-sm sm:text-lg px-1 sm:px-2"
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            -
                          </button>
                          <span className="px-2 sm:px-4 text-sm sm:text-base">
                            {item.quantity}
                          </span>
                          <button
                            className="text-sm sm:text-lg px-1 sm:px-2"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 hover:text-red-600 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="lg:w-1/3"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                <h2 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between text-white mb-3 sm:mb-4">
                  <span className="text-sm sm:text-base">Total:</span>
                  <span className="font-semibold text-sm sm:text-base">
                    Rs.{totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-all text-sm sm:text-base"
                >
                  Proceed to Checkout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
