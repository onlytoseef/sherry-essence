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

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    originalPrice: 0,
    salePrice: 0,
    image: "",
    bottleSize: "",
    stock: 0,
    category: "male",
    collection: "flora",
  });

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
    setProductData({
      name: "",
      description: "",
      originalPrice: 0,
      salePrice: 0,
      image: "",
      bottleSize: "",
      stock: 0,
      category: "male",
      collection: "flora",
    });
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img
          src={image.split(",")[0]}
          alt="Product"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
      ),
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

      <Modal
        title="Add Product"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        onOk={handleAddProduct}
      >
        <Form layout="vertical">
          <Form.Item label="Product Name">
            <Input
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
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
          <Form.Item label="Image URLs (comma separated)">
            <Input
              value={productData.image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Bottle Size (ml)">
            <Input
              value={productData.bottleSize}
              onChange={(e) =>
                setProductData({ ...productData, bottleSize: e.target.value })
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
          <Form.Item label="Collection">
            <Select
              value={productData.collection}
              onChange={(value) =>
                setProductData({ ...productData, collection: value })
              }
            >
              <Option value="flora">Flora</Option>
              <Option value="lora">Lora</Option>
              <Option value="aura">Aura</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Edit Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={handleEditProduct}
      >
        <Form layout="vertical">
          {Object.keys(productData).map((key) => (
            <Form.Item key={key} label={key.replace(/([A-Z])/g, " $1")}>
              <Input
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
