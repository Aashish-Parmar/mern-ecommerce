// import React from 'react'
// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products", {
//         params: {
//           search,
//           sort,
//           page,
//           limit: 10,
//         },
//       });
//       setProducts(res.data.products);
//       setTotalPages(res.data.totalPages);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [search, sort, page]);

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Product Listing</h1>

//       {/* Search and Sort */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
//         <input
//           type="text"
//           placeholder="Search products"
//           className="border p-2 rounded w-full sm:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="border p-2 rounded w-full sm:w-1/4"
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//             <img
//              src={`https://placehold.co/300x200?text=${encodeURIComponent(product.name)}`}

//               alt={product.name}
//               className="w-full h-40 object-cover mb-2 rounded"
//             />
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-6 flex justify-center gap-4">
//         <button
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           disabled={page <= 1}
//           onClick={() => setPage((prev) => prev - 1)}
//         >
//           Prev
//         </button>
//         <span className="self-center">
//           Page {page} of {totalPages}
//         </span>
//         <button
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           disabled={page >= totalPages}
//           onClick={() => setPage((prev) => prev + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products", {
        params: {
          search,
          sort,
          page,
          limit: 10,
        },
      });
      setProducts(res.data.products);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, sort, page]);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-purple-700 drop-shadow-lg">
        🌈 Colorful Product Listing
      </h1>

      {/* Search and Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border-2 border-purple-500 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 rounded-lg p-3 w-full sm:w-1/3 shadow-md transition"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
        <select
          className="border-2 border-purple-500 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 rounded-lg p-3 w-full sm:w-1/4 shadow-md transition"
          value={sort}
          onChange={(e) => {
            setPage(1);
            setSort(e.target.value);
          }}
        >
          <option value="">Sort By Price</option>
          <option value="price-asc">Low to High 💰⬆️</option>
          <option value="price-desc">High to Low 💰⬇️</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-4 border-purple-300"
          >
            <img
              src={`https://placehold.co/300x200?text=${encodeURIComponent(
                product.name
              )}&bg=7f9cf5&fg=ffffff&font=roboto`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
            />
            <h2 className="text-xl font-bold text-pink-600 mb-2">
              {product.name}
            </h2>
            <p className="text-lg font-semibold text-green-600 mb-4">
              ${product.price}
            </p>
            <button
              className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-400 transition"
              onClick={() => alert(`You clicked on ${product.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          className="px-5 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          ← Prev
        </button>
        <span className="self-center text-lg font-semibold text-purple-700">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-5 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ProductList;
