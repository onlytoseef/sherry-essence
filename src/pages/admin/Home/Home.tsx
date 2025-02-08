import React from "react";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineShopping,
} from "react-icons/ai";

interface CardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  percentage: string;
  increase: boolean;
}

const Card: React.FC<CardProps> = ({
  icon,
  value,
  label,
  percentage,
  increase,
}) => {
  return (
    <div
      className="flex items-center justify-between rounded-lg p-6 w-full max-w-sm lg:max-w-md shadow-lg"
      style={{
        background: "linear-gradient(135deg, black, #d4af37)",
      }}
    >
      <div className="flex items-center space-x-4">
        <div className="text-white bg-opacity-30 bg-black p-4 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
          <p className="text-gray-300">{label}</p>
        </div>
      </div>
      <div
        className={`text-lg font-semibold ${
          increase ? "text-green-400" : "text-red-400"
        }`}
      >
        {percentage} {increase ? "↑" : "↓"}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const cards = [
    {
      icon: <AiOutlineEye size={28} />,
      value: "$3.456K",
      label: "Total Views",
      percentage: "0.43%",
      increase: true,
    },
    {
      icon: <AiOutlineShoppingCart size={28} />,
      value: "$45.2K",
      label: "Total Profit",
      percentage: "4.35%",
      increase: true,
    },
    {
      icon: <AiOutlineShopping size={28} />,
      value: "2.450",
      label: "Total Product",
      percentage: "2.59%",
      increase: true,
    },
    {
      icon: <AiOutlineUser size={28} />,
      value: "3.456",
      label: "Total Users",
      percentage: "0.95%",
      increase: false,
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 py-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          value={card.value}
          label={card.label}
          percentage={card.percentage}
          increase={card.increase}
        />
      ))}
    </div>
  );
};

export default Home;
