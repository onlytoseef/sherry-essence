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
import { toast } from "react-hot-toast";

const { Option } = Select;

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, loaded } = useSelector(
    // Add `loaded` here
    (state: RootState) => state.products
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [form] = Form.useForm();

  const defaultProductState = {
    name: "",
    description: "",
    details: "",
    originalPrice: 0,
    salePrice: 0,
    stock: 0,
    image: "",
    category: "",
    collection: "",
  };

  const [productData, setProductData] = useState(defaultProductState);

  useEffect(() => {
    if (!loaded) {
      // Only fetch products if they haven't been loaded yet
      dispatch(fetchProducts());
    }
  }, [dispatch, loaded]); // Add `loaded` to the dependency array

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      setIsProcessing(true);

      if (isEditing) {
        await dispatch(editProduct({ ...productData, id: currentProduct.id }));
        toast.success("Product updated successfully!");
      } else {
        await dispatch(addProduct(productData));
        toast.success("Product added successfully!");
      }

      setIsProcessing(false);
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      toast.error("Please fix the errors before submitting.");
    }
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
    toast.success("Product deleted!");
  };

  const resetForm = () => {
    form.resetFields();
    setProductData(defaultProductState);
    setIsEditing(false);
  };

  const columns = [
    {
      title: "Images",
      dataIndex: "image",
      key: "image",
      render: (image: any) => {
        const images = Array.isArray(image)
          ? image
          : image?.split(",").map((img) => img.trim()) || [];

        if (images.length === 0) return <span>No Image</span>;

        return (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {images.map((url: string, index: number) => (
              <img
                key={index}
                src={url}
                alt={`Product ${index + 1}`}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        );
      },
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
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
              form.setFieldsValue(record);
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
        }}
        icon={<PlusOutlined />}
        onClick={() => {
          setIsEditing(false);
          setCurrentProduct(null);
          setProductData(defaultProductState);
          form.resetFields();
          setIsModalOpen(true);
        }}
      >
        Add Product
      </Button>

      {/* Responsive Table Container */}
      <div
        style={{
          overflowX: "auto",
          marginTop: "20px",
          fontSize: "14px", // Default font size
        }}
        className="responsive-table"
      >
        <Table
          dataSource={products}
          columns={columns}
          loading={loading}
          rowKey="id"
          scroll={{ x: "max-content" }} // Enable horizontal scrolling
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
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Product Name"
            name="name"
            rules={[
              { required: true, message: "Please input the product name!" },
            ]}
          >
            <Input
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input the product description!",
              },
            ]}
          >
            <Input.TextArea
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Details"
            name="details"
            rules={[
              { required: true, message: "Please input the product details!" },
            ]}
          >
            <Input.TextArea
              value={productData.details}
              onChange={(e) =>
                setProductData({ ...productData, details: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Original Price"
            name="originalPrice"
            rules={[
              { required: true, message: "Please input the original price!" },
            ]}
          >
            <Input
              type="number"
              min={0}
              value={productData.originalPrice}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  originalPrice: Number(e.target.value),
                })
              }
            />
          </Form.Item>

          <Form.Item
            label="Sale Price"
            name="salePrice"
            rules={[
              { required: true, message: "Please input the sale price!" },
            ]}
          >
            <Input
              type="number"
              min={0}
              value={productData.salePrice}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  salePrice: Number(e.target.value),
                })
              }
            />
          </Form.Item>

          <Form.Item
            label="Stock"
            name="stock"
            rules={[
              { required: true, message: "Please input the stock quantity!" },
            ]}
          >
            <Input
              type="number"
              min={0}
              value={productData.stock}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  stock: Number(e.target.value),
                })
              }
            />
          </Form.Item>

          <Form.Item
            label="Image URLs (comma-separated)"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input at least one image URL!",
              },
            ]}
          >
            <Input
              value={productData.image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
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

          <Form.Item
            label="Collection"
            name="collection"
            rules={[{ required: true, message: "Please select a collection!" }]}
          >
            <Select
              value={productData.collection}
              onChange={(value) =>
                setProductData({ ...productData, collection: value })
              }
            >
              <Option value="flora">Flora</Option>
              <Option value="aura">Aura</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </motion.div>
  );
};

export default Products;
