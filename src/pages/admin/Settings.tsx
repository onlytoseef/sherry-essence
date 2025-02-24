import { motion } from "framer-motion";

const Settings: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Settings Page</h1>
      <p>Update your admin settings here.</p>
    </motion.div>
  );
};

export default Settings;
