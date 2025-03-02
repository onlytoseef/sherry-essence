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
import { Button, Table, Modal, Input, Select, Form, Spin } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const defaultProductState = {
    name: "",
    description: "",
    details: "",
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

  const handleSubmit = async () => {
    setIsProcessing(true);
    if (isEditing) {
      await dispatch(editProduct({ ...productData, id: currentProduct.id }));
    } else {
      await dispatch(addProduct(productData));
    }
    setIsProcessing(false);
    setIsModalOpen(false);
    resetForm();
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const resetForm = () => {
    setProductData(defaultProductState);
    setIsEditing(false);
  };

  const columns = [
    {
      title: "Images",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {image.split(",").map((url, index) => (
            <img
              key={index}
              src={url.trim()}
              alt="Product"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "8px",
                objectFit: "cover",
                border: "2px solid #ddd",
                padding: "3px",
              }}
            />
          ))}
        </div>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Details", dataIndex: "details", key: "details" },
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
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentProduct(record);
              setProductData(record);
              setIsEditing(true);
              setIsModalOpen(true);
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
    <motion.div style={{ padding: "24px" }}>
      <Button
        style={{
          backgroundColor: "#FFA500",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "8px",
        }}
        icon={<PlusOutlined />}
        onClick={() => setIsModalOpen(true)}
      >
        Add Product
      </Button>

      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <Table
          dataSource={products}
          columns={columns}
          loading={loading}
          rowKey="id"
          scroll={{ x: "max-content" }} // Responsive table
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            backgroundColor: "#fff",
          }}
        />
      </div>

      <Modal
        title={isEditing ? "Edit Product" : "Add Product"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        okButtonProps={{ disabled: isProcessing }}
        okText={
          isProcessing ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />}
            />
          ) : (
            "OK"
          )
        }
        style={{ top: 50 }}
        bodyStyle={{ padding: "20px" }}
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Details">
            <Input.TextArea
              value={productData.details}
              onChange={(e) =>
                setProductData({ ...productData, details: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Original Price">
            <Input
              type="number"
              value={productData.originalPrice}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  originalPrice: Number(e.target.value),
                })
              }
            />
          </Form.Item>
          <Form.Item label="Sale Price">
            <Input
              type="number"
              value={productData.salePrice}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  salePrice: Number(e.target.value),
                })
              }
            />
          </Form.Item>
          <Form.Item label="Stock">
            <Input
              type="number"
              value={productData.stock}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  stock: Number(e.target.value),
                })
              }
            />
          </Form.Item>
          <Form.Item label="Image URL">
            <Input
              value={productData.image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Category">
            <Select
              value={productData.category}
              onChange={(value) =>
                setProductData({ ...productData, category: value })
              }
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </motion.div>
  );
};

export default Products;
