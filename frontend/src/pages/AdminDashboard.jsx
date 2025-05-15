import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const [editProduct, setEditProduct] = useState(null); // for modal
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data.products);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to fetch products");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setMessage("✅ Product deleted");
      fetchProducts();
    } catch (err) {
      console.error(err);
      setMessage("❌ Error deleting product");
    }
  };

  const openEditModal = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, formData);
      setMessage("✅ Product updated");
      setEditProduct(null); // close modal
      fetchProducts(); // refresh
    } catch (err) {
      console.error(err);
      setMessage("❌ Error updating product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Dashboard</h1>

      {message && <p className="text-center mb-4 font-medium text-blue-600">{message}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{product.name}</td>
                <td className="px-4 py-2 border-b">₹{product.price}</td>
                <td className="px-4 py-2 border-b">{product.category}</td>
                <td className="px-4 py-2 border-b space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => openEditModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✨ Edit Modal */}
      {editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Product</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded px-3 py-2"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full border rounded px-3 py-2"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full border rounded px-3 py-2"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>

            <div className="flex justify-end mt-6 space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
