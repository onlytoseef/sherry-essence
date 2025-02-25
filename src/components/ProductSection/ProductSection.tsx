import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProductSection: React.FC = () => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <div className="flex justify-center bg-black items-center">
      <div className="w-full max-w-6xl p-6 rounded-lg">
        <h2 className="text-center text-orange-500 text-3xl font-semibold mb-6">
          Best Selling Products
        </h2>

        {loading ? (
          <p className="text-center text-white">Loading products...</p>
        ) : (
          <div className="relative flex space-x-6 p-4 overflow-hidden">
            {products.map((product: any) => {
              const imageUrls =
                typeof product.image === "string"
                  ? (product.image as string)
                      .split(",")
                      .map((url: string) => url.trim())
                  : [];

              return (
                <div
                  key={product.id}
                  className="min-w-[250px] bg-[#1C1C1C] p-6 rounded-lg text-white text-center"
                >
                  <img
                    src={
                      imageUrls.length > 0
                        ? imageUrls[0]
                        : "https://via.placeholder.com/150"
                    } // Show first image
                    alt={product.name}
                    className="mx-auto mb-4 w-40 h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg">{product.name}</h3>
                  <p className="text-orange-500 text-sm">
                    ${product.salePrice} | {product.bottleSize}ml
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
