import { motion } from "framer-motion";

const Orders: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Orders Page</h1>
      <p>Manage all your orders here.</p>
    </motion.div>
  );
};

export default Orders;
