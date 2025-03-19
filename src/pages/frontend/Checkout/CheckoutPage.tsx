import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const generateOrderNumber = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!state) {
      toast.error("No products found. Redirecting to cart...");
      navigate("/cart");
    }
  }, [state, navigate]);

  if (!state) {
    return null;
  }

  const items = state.items || [state.product];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.city ||
      !formData.phone ||
      !formData.email
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsProcessing(true);

    const orderNumber = generateOrderNumber();

    const order = {
      ...formData,
      orderNumber,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        quantity: item.quantity,
        price: item.salePrice,
      })),
      totalPrice: items.reduce(
        (total, item) => total + item.salePrice * item.quantity,
        0
      ),
      status: "placed",
      createdAt: new Date().toISOString(),
    };

    try {
      // Save order to Firebase
      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, order);

      // Send email confirmation
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          orderDetails: {
            items: order.items,
            totalPrice: order.totalPrice,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      toast.success(
        `Order placed successfully! Your order number is ${orderNumber}`
      );
      navigate("/");
    } catch (error) {
      toast.error("Failed to place order");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-black min-h-screen py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="lg:col-span-2 bg-black/20 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg border border-white/10">
          <h1 className="text-2xl font-bold mb-6 text-white">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-white">
                Contact Information
              </h2>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                required
              />
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={formData.saveInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, saveInfo: e.target.checked })
                  }
                  className="mr-2"
                />
                <label htmlFor="saveInfo" className="text-sm text-gray-400">
                  Email me with news and offers
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 text-white">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 mt-4 focus:outline-none focus:border-orange-500"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Postal Code (Optional)"
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  className="p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-3 border border-white/20 rounded-md bg-black/20 text-white placeholder-gray-400 mt-4 focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                &larr; Return to Cart
              </button>
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : null}
                {isProcessing ? "Processing..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-black/20 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg border border-white/10">
          <h2 className="text-lg font-semibold mb-6 text-white">
            Order Summary
          </h2>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-gray-400">Quantity: {item.quantity}</p>
                <p className="text-gray-400">
                  Price: Rs {item.salePrice * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-400">Subtotal</p>
              <p className="font-semibold text-white">
                Rs{" "}
                {items.reduce(
                  (total, item) => total + item.salePrice * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Shipping</p>
              <p className="font-semibold text-white">Rs 287.00</p>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-4">
              <p className="text-lg font-semibold text-white">Total</p>
              <p className="text-lg font-semibold text-white">
                Rs{" "}
                {items.reduce(
                  (total, item) => total + item.salePrice * item.quantity,
                  0
                ) + 287}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
