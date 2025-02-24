import { motion } from "framer-motion";

const Products: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Products Page</h1>
      <p>Manage all your products here.</p>
    </motion.div>
  );
};

export default Products;
