import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import SalesAnalytics from "./pages/SalesAnalytics";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";


const App = () => {

  // ==========================================
  // USER PROFILE STATE
  // ==========================================

  const [userProfile, setUserProfile] = useState(() => {

    const savedProfile = localStorage.getItem(
      "businessProProfile"
    );

    if (savedProfile) {
      return JSON.parse(savedProfile);
    }

    return {
      name: "Vikash Tiwari",
      email: "vikash@example.com",
      phone: "+91 98765 43210",
      role: "Administrator",
    };

  });


  // ==========================================
  // SAVE PROFILE TO LOCAL STORAGE
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "businessProProfile",
      JSON.stringify(userProfile)
    );

  }, [userProfile]);


  // ==========================================
  // UPDATE PROFILE
  // ==========================================

  const updateUserProfile = (updatedData) => {

    setUserProfile((previousProfile) => ({
      ...previousProfile,
      ...updatedData,
    }));

  };


  return (
    <BrowserRouter>

      <div className="app">


        {/* =====================================
            SIDEBAR
        ===================================== */}

        <Sidebar />


        {/* =====================================
            MAIN AREA
        ===================================== */}

        <div className="main-area">


          {/* =====================================
              NAVBAR

              User profile Navbar ko pass kar rahe hain
          ===================================== */}

          <Navbar
            userProfile={userProfile}
          />


          {/* =====================================
              PAGE CONTAINER
          ===================================== */}

          <div className="page-container">

            <Routes>


              {/* =================================
                  DEFAULT ROUTE
              ================================= */}

              <Route
                path="/"
                element={
                  <Navigate
                    to="/dashboard"
                    replace
                  />
                }
              />


              {/* =================================
                  DASHBOARD
              ================================= */}

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />


              {/* =================================
                  SALES ANALYTICS
              ================================= */}

              <Route
                path="/sales-analytics"
                element={<SalesAnalytics />}
              />


              {/* =================================
                  CUSTOMERS
              ================================= */}

              <Route
                path="/customers"
                element={<Customers />}
              />


              {/* =================================
                  PRODUCTS
              ================================= */}

              <Route
                path="/products"
                element={<Products />}
              />


              {/* =================================
                  TRANSACTIONS
              ================================= */}

              <Route
                path="/transactions"
                element={<Transactions />}
              />


              {/* =================================
                  REPORTS
              ================================= */}

              <Route
                path="/reports"
                element={<Reports />}
              />


              {/* =================================
                  SETTINGS
              ================================= */}

              <Route
                path="/settings"
                element={
                  <Settings
                    userProfile={userProfile}
                    updateUserProfile={updateUserProfile}
                  />
                }
              />


              {/* =================================
                  UNKNOWN URL
              ================================= */}

              <Route
                path="*"
                element={
                  <Navigate
                    to="/dashboard"
                    replace
                  />
                }
              />

            </Routes>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
};


export default App;