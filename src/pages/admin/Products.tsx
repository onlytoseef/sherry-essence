import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../../store/features/productSlice";
import { RootState, AppDispatch } from "../../store/store";
import { motion } from "framer-motion";
import { Button, Table, Modal, Input, Select, Form } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  const defaultProductState = {
    name: "",
    description: "",
    originalPrice: 0,
    salePrice: 0,
    image: "",
    bottleSize: "",
    stock: 0,
    category: "male",
    collection: "flora",
  };

  const [productData, setProductData] = useState(defaultProductState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    dispatch(addProduct(productData));
    setIsAddModalOpen(false);
    resetForm();
  };

  const handleEditProduct = () => {
    dispatch(editProduct(currentProduct));
    setIsEditModalOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const resetForm = () => {
    setProductData(defaultProductState);
  };

  const columns = [
    {
      title: "Images",
      dataIndex: "image",
      key: "image",
      render: (image: string) => {
        const imageUrls = image.split(",").map((url) => url.trim()); // Handle multiple URLs
        return (
          <div className="flex gap-2">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Product ${index + 1}`}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        );
      },
    },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Collection", dataIndex: "collection", key: "collection" },
    {
      title: "Original Price",
      dataIndex: "originalPrice",
      key: "originalPrice",
    },
    { title: "Sale Price", dataIndex: "salePrice", key: "salePrice" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentProduct(record);
              setIsEditModalOpen(true);
            }}
          />
          <Button
            type="default"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteProduct(record.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button
          style={{
            backgroundColor: "black",
            color: "orange",
            border: "none",
          }}
          className="hover:!bg-orange-500 hover:!text-black transition-all"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Product
        </Button>
      </div>

      <Table
        dataSource={products}
        columns={columns}
        loading={loading}
        rowKey="id"
      />

      {/* Add Product Modal */}
      <Modal
        title="Add Product"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        onOk={handleAddProduct}
      >
        <Form layout="vertical">
          {Object.entries(productData).map(([key, value]) => (
            <Form.Item
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              rules={
                key === "stock"
                  ? []
                  : [{ required: true, message: `${key} is required` }]
              }
            >
              <Input
                placeholder={`Enter ${key}`}
                type={typeof value === "number" ? "number" : "text"}
                value={productData[key as keyof typeof productData]}
                onChange={(e) =>
                  setProductData({ ...productData, [key]: e.target.value })
                }
              />
            </Form.Item>
          ))}
        </Form>
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        title="Edit Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={handleEditProduct}
      >
        <Form layout="vertical">
          {Object.entries(productData).map(([key, _]) => (
            <Form.Item
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              rules={
                key === "stock"
                  ? []
                  : [{ required: true, message: `${key} is required` }]
              }
            >
              <Input
                placeholder={`Enter ${key}`}
                type={
                  typeof productData[key as keyof typeof productData] ===
                  "number"
                    ? "number"
                    : "text"
                }
                value={currentProduct?.[key] || ""}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    [key]: e.target.value,
                  })
                }
              />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </motion.div>
  );
};

export default Products;
