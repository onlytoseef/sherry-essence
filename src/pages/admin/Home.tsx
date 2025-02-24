import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Home Page</h1>
      <p>Welcome to the Admin Dashboard.</p>
    </motion.div>
  );
};

export default Home;
