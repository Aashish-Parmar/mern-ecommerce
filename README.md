# MERN E-commerce Product Listing

A simple e-commerce product listing app built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.  
Includes product listing with pagination, sorting, search, and an admin panel to add/edit/delete products.

---

## 🚀 Features

- **Product Listing Page**  
  - Pagination (10 products per page)  
  - Search by product name  
  - Sort by price (low to high, high to low)  

- **Admin Page (Protected)**  
  - Add new products  
  - Edit existing products  
  - Delete products  

- **Authentication**  
  - JWT-based login for admin users (optional)  

- **Responsive UI** using **Tailwind CSS**  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js, MongoDB (Atlas)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Deployment:** Vercel (frontend), Render (backend)

---

## 📁 Project Structure

```
ecommerce-project/
├── backend/          # Express server, API routes, controllers, MongoDB models
├── frontend/         # React app with Vite and Tailwind CSS
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v14+) installed  
- MongoDB Atlas account or local MongoDB instance  
- Git installed  

---

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

- Create a `.env` file inside `backend` with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

- Start backend server:

```bash
npm run dev
# or
node server.js
```

API will run on [http://localhost:5000](http://localhost:5000)

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

- Create a `.env` file inside `frontend` with:

```
VITE_API_URL=http://localhost:5000/api
```

- Start frontend dev server:

```bash
npm run dev
```

App will run on [http://localhost:3000](http://localhost:3000) (or the port Vite assigns)

---

## 🧩 Usage

- Open the frontend URL in your browser  
- View product listings, search, sort, and paginate  
- Log in as admin to add, edit, or delete products

---

## 📦 Deployment

- Backend deployed on Render.com (or your preferred service)  
- Frontend deployed on Vercel (or your preferred service)  

Update the `.env` in frontend with your live API URL:

```
VITE_API_URL=https://your-backend-url/api
```

---

## 📝 Notes

- Image uploading is **not** implemented; placeholder images are used.  
- Form validations are included for adding/editing products.  
- Pagination limits 10 products per page.

- ## 📸 Screenshots

### 🏠 Home Page
![Home Page](./src/assets/home.png)
![Screenshot (317)](https://github.com/user-attachments/assets/2abe1590-d3d6-4209-997a-a59c86dc2581)

### 🧑‍💼 Admin Dashboard
![Admin Page](./src/assets/admin.png)

### 📦 Product Listing
![Product Listing](./src/assets/product.png)


---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests for improvements!

---

## 📞 Contact

Created by Aashish Parmar - aashishparmarthree45@gmail.com 
GitHub: https://github.com/Aashish-Parmar

---

## ⭐ If this helped you, please star the repo!
