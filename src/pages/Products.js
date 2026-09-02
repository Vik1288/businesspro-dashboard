import React, { useState } from "react";

const productsData = [
  {
    id: "PRD-001",
    name: "Premium Plan",
    category: "Subscription",
    price: "₹4,999",
    stock: 245,
    status: "In Stock",
    sales: 1245,
  },
  {
    id: "PRD-002",
    name: "Business Plan",
    category: "Subscription",
    price: "₹8,999",
    stock: 128,
    status: "In Stock",
    sales: 980,
  },
  {
    id: "PRD-003",
    name: "Basic Plan",
    category: "Subscription",
    price: "₹2,499",
    stock: 68,
    status: "Low Stock",
    sales: 765,
  },
  {
    id: "PRD-004",
    name: "Enterprise Plan",
    category: "Subscription",
    price: "₹14,999",
    stock: 0,
    status: "Out of Stock",
    sales: 540,
  },
  {
    id: "PRD-005",
    name: "Starter Plan",
    category: "Subscription",
    price: "₹1,499",
    stock: 185,
    status: "In Stock",
    sales: 430,
  },
  {
    id: "PRD-006",
    name: "Pro Add-on",
    category: "Add-on",
    price: "₹999",
    stock: 42,
    status: "Low Stock",
    sales: 315,
  },
];

const Products = () => {
  const [search, setSearch] = useState("");

  // SEARCH FILTER
  const filteredProducts = productsData.filter((product) => {
    const searchText = search.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.id.toLowerCase().includes(searchText)
    );
  });

  // TOTAL STOCK
  const totalStock = productsData.reduce(
    (total, product) => total + product.stock,
    0
  );

  // LOW STOCK
  const lowStock = productsData.filter(
    (product) => product.status === "Low Stock"
  ).length;

  // OUT OF STOCK
  const outOfStock = productsData.filter(
    (product) => product.status === "Out of Stock"
  ).length;

  return (
    <main className="dashboard-content">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className="page-heading">

        <div>
          <h1>Products</h1>

          <p>
            Manage products, pricing and inventory.
          </p>
        </div>

        <button className="date-button">
          + Add Product
        </button>

      </div>


      {/* =========================
          INVENTORY STATS
      ========================== */}

      <div className="stats-grid">

        <div className="stat-card">

          <span>Total Products</span>

          <h2>
            {productsData.length}
          </h2>

          <small>
            All active products
          </small>

        </div>


        <div className="stat-card">

          <span>Total Stock</span>

          <h2>
            {totalStock}
          </h2>

          <small>
            Units available
          </small>

        </div>


        <div className="stat-card">

          <span>Low Stock</span>

          <h2>
            {lowStock}
          </h2>

          <small>
            Products need attention
          </small>

        </div>


        <div className="stat-card">

          <span>Out of Stock</span>

          <h2>
            {outOfStock}
          </h2>

          <small>
            Products unavailable
          </small>

        </div>

      </div>


      {/* =========================
          PRODUCT OVERVIEW
      ========================== */}

      <div className="section-heading">

        <div>

          <h2>
            Product Overview
          </h2>

          <p>
            Popular products and their current inventory
          </p>

        </div>

      </div>


      {/* =========================
          PRODUCT CARDS
      ========================== */}

      <div className="products-cards-grid">

        {productsData.slice(0, 4).map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <div className="product-card-top">

              <div className="product-icon">
                {product.name.charAt(0)}
              </div>


              <span
                className={`stock-badge ${
                  product.status
                    .toLowerCase()
                    .replaceAll(" ", "-")
                }`}
              >
                {product.status}
              </span>

            </div>


            <div className="product-card-info">

              <h3>
                {product.name}
              </h3>

              <p>
                {product.category}
              </p>

            </div>


            <div className="product-card-bottom">

              <div>

                <small>
                  Price
                </small>

                <strong>
                  {product.price}
                </strong>

              </div>


              <div>

                <small>
                  Stock
                </small>

                <strong>
                  {product.stock}
                </strong>

              </div>


              <div>

                <small>
                  Sales
                </small>

                <strong>
                  {product.sales}
                </strong>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          INVENTORY TABLE
      ========================== */}

      <div className="data-card products-table-card">

        <div className="data-card-header">

          <div>

            <h2>
              Inventory
            </h2>

            <p>
              Complete product inventory information
            </p>

          </div>


          {/* SEARCH BOX */}

          <div className="product-search-wrapper">

            <input
              type="text"
              className="product-search"
              placeholder="Search product..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>

        </div>


        {/* SEARCH RESULT COUNT */}

        <div className="search-result-info">

          {search ? (
            <span>
              Showing {filteredProducts.length} result
              {filteredProducts.length !== 1 ? "s" : ""} for "
              {search}"
            </span>
          ) : (
            <span>
              Showing all {productsData.length} products
            </span>
          )}

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>
                  Product
                </th>

                <th>
                  Category
                </th>

                <th>
                  Price
                </th>

                <th>
                  Stock
                </th>

                <th>
                  Sales
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredProducts.length > 0 ? (

                filteredProducts.map((product) => (

                  <tr key={product.id}>

                    {/* PRODUCT */}

                    <td>

                      <div className="product-table-name">

                        <div className="product-table-icon">
                          {product.name.charAt(0)}
                        </div>


                        <div>

                          <strong>
                            {product.name}
                          </strong>

                          <small>
                            {product.id}
                          </small>

                        </div>

                      </div>

                    </td>


                    {/* CATEGORY */}

                    <td>
                      {product.category}
                    </td>


                    {/* PRICE */}

                    <td>

                      <strong>
                        {product.price}
                      </strong>

                    </td>


                    {/* STOCK */}

                    <td>
                      {product.stock}
                    </td>


                    {/* SALES */}

                    <td>
                      {product.sales}
                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={`stock-status ${
                          product.status
                            .toLowerCase()
                            .replaceAll(" ", "-")
                        }`}
                      >
                        {product.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="no-products"
                  >

                    <div>

                      <strong>
                        No products found
                      </strong>

                      <p>
                        Try searching with another product name.
                      </p>

                    </div>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
};

export default Products;