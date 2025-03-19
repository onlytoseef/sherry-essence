import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { toast } from "react-hot-toast";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async () => {
    if (!orderNumber) {
      toast.error("Please enter an order number");
      return;
    }

    setLoading(true);
    try {
      const ordersRef = collection(db, "orders");
      const querySnapshot = await getDocs(
        query(ordersRef, where("orderNumber", "==", Number(orderNumber)))
      );
      if (querySnapshot.empty) {
        toast.error("Order not found");
        setOrder(null);
      } else {
        const orderData = querySnapshot.docs[0].data();
        setOrder(orderData);
      }
    } catch (error) {
      toast.error("Failed to fetch order");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded-md"
          />
          <button
            onClick={handleTrackOrder}
            className="bg-orange-600 text-white px-6 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Searching..." : "Track"}
          </button>
        </div>

        {order && (
          <div className="mt-6 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <p>
              <span className="text-gray-400">Order Number:</span>{" "}
              <span className="text-white">{order.orderNumber}</span>
            </p>
            <p>
              <span className="text-gray-400">Status:</span>{" "}
              <span
                className={`font-semibold ${
                  order.status === "placed"
                    ? "text-yellow-400"
                    : order.status === "confirmed"
                    ? "text-blue-400"
                    : "text-green-400"
                }`}
              >
                {order.status.toUpperCase()}
              </span>
            </p>
            <p>
              <span className="text-gray-400">Product:</span>{" "}
              <span className="text-white">{order.product.name}</span>
            </p>
            <p>
              <span className="text-gray-400">Quantity:</span>{" "}
              <span className="text-white">{order.product.quantity}</span>
            </p>
            <p>
              <span className="text-gray-400">Total Price:</span>{" "}
              <span className="text-white">${order.totalPrice}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
