import React, { useEffect, useState } from "react";

import {
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Moon,
  Sun,
  CheckCircle,
  Package,
  Users,
  Receipt,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


/* =========================================
   STORAGE
========================================= */

const STORAGE_KEY = "businesspro-settings";


/* =========================================
   DEFAULT SETTINGS
========================================= */

const DEFAULT_SETTINGS = {
  name: "Vikash Tiwari",
  email: "vikash@example.com",
  phone: "+91 98765 43210",

  emailNotifications: true,
  orderNotifications: true,
  marketingNotifications: false,

  darkMode: false,

  language: "English",
  timeZone: "IST",
};


/* =========================================
   SEARCH DATA
========================================= */

const searchData = [

  {
    type: "Product",
    name: "Premium Plan",
    detail: "Subscription • ₹4,999",
    path: "/products",
  },

  {
    type: "Product",
    name: "Business Plan",
    detail: "Subscription • ₹8,999",
    path: "/products",
  },

  {
    type: "Product",
    name: "Basic Plan",
    detail: "Subscription • ₹2,499",
    path: "/products",
  },

  {
    type: "Product",
    name: "Enterprise Plan",
    detail: "Subscription • ₹14,999",
    path: "/products",
  },

  {
    type: "Customer",
    name: "Rahul Sharma",
    detail: "Customer",
    path: "/customers",
  },

  {
    type: "Customer",
    name: "Priya Singh",
    detail: "Customer",
    path: "/customers",
  },

  {
    type: "Customer",
    name: "Amit Kumar",
    detail: "Customer",
    path: "/customers",
  },

  {
    type: "Customer",
    name: "Neha Verma",
    detail: "Customer",
    path: "/customers",
  },

  {
    type: "Transaction",
    name: "#TRX-1001",
    detail: "Rahul Sharma • ₹12,500",
    path: "/transactions",
  },

  {
    type: "Transaction",
    name: "#TRX-1002",
    detail: "Priya Singh • ₹8,900",
    path: "/transactions",
  },

  {
    type: "Transaction",
    name: "#TRX-1003",
    detail: "Amit Kumar • ₹4,500",
    path: "/transactions",
  },

];


/* =========================================
   GET SAVED SETTINGS
========================================= */

const getSavedSettings = () => {

  try {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (saved) {

      const parsed =
        JSON.parse(saved);

      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
      };

    }

  } catch (error) {

    console.error(
      "Error loading settings:",
      error
    );

  }

  return DEFAULT_SETTINGS;

};


/* =========================================
   GET INITIALS
========================================= */

const getInitials = (name) => {

  if (!name || !name.trim()) {
    return "VT";
  }

  const words =
    name.trim().split(/\s+/);

  if (words.length === 1) {

    return words[0]
      .substring(0, 2)
      .toUpperCase();

  }

  return (
    words[0][0] +
    words[words.length - 1][0]
  ).toUpperCase();

};


/* =========================================
   NAVBAR
========================================= */

const Navbar = () => {

  const navigate = useNavigate();


  /* SEARCH */

  const [search, setSearch] =
    useState("");


  /* DROPDOWNS */

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);


  /* SETTINGS */

  const [settings, setSettings] =
    useState(getSavedSettings);


  /* =========================================
     APPLY DARK MODE
  ========================================= */

  const applyDarkMode = (enabled) => {

    if (enabled) {

      document.body.classList.add(
        "dark-mode"
      );

    } else {

      document.body.classList.remove(
        "dark-mode"
      );

    }

  };


  /* =========================================
     INITIAL DARK MODE
  ========================================= */

  useEffect(() => {

    applyDarkMode(
      settings.darkMode
    );

  }, []);


  /* =========================================
     SETTINGS UPDATE EVENT
     
     IMPORTANT:
     Settings page se save hone ke baad
     Navbar automatically update hoga.
  ========================================= */

  useEffect(() => {

    const handleSettingsUpdate = (event) => {

      let updatedSettings;


      if (event.detail) {

        updatedSettings = {
          ...DEFAULT_SETTINGS,
          ...event.detail,
        };

      } else {

        updatedSettings =
          getSavedSettings();

      }


      setSettings(
        updatedSettings
      );


      applyDarkMode(
        updatedSettings.darkMode
      );

    };


    window.addEventListener(
      "businesspro-settings-updated",
      handleSettingsUpdate
    );


    return () => {

      window.removeEventListener(
        "businesspro-settings-updated",
        handleSettingsUpdate
      );

    };

  }, []);


  /* =========================================
     STORAGE EVENT
  ========================================= */

  useEffect(() => {

    const handleStorage = (event) => {

      if (
        event.key !== STORAGE_KEY
      ) {
        return;
      }


      if (!event.newValue) {
        return;
      }


      try {

        const updatedSettings = {
          ...DEFAULT_SETTINGS,
          ...JSON.parse(
            event.newValue
          ),
        };


        setSettings(
          updatedSettings
        );


        applyDarkMode(
          updatedSettings.darkMode
        );

      } catch (error) {

        console.error(
          "Storage update error:",
          error
        );

      }

    };


    window.addEventListener(
      "storage",
      handleStorage
    );


    return () => {

      window.removeEventListener(
        "storage",
        handleStorage
      );

    };

  }, []);


  /* =========================================
     SEARCH FILTER
  ========================================= */

  const filteredResults =
    searchData.filter((item) => {

      const text =
        search
          .toLowerCase()
          .trim();


      if (!text) {
        return false;
      }


      return (

        item.name
          .toLowerCase()
          .includes(text)

        ||

        item.detail
          .toLowerCase()
          .includes(text)

        ||

        item.type
          .toLowerCase()
          .includes(text)

      );

    });


  /* =========================================
     SEARCH RESULT CLICK
  ========================================= */

  const handleResultClick = (path) => {

    setSearch("");

    setShowNotifications(false);

    setShowProfile(false);

    navigate(path);

  };


  /* =========================================
     DARK MODE
  ========================================= */

  const toggleDarkMode = () => {

    const updatedSettings = {

      ...settings,

      darkMode:
        !settings.darkMode,

    };


    setSettings(
      updatedSettings
    );


    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        updatedSettings
      )
    );


    applyDarkMode(
      updatedSettings.darkMode
    );


    window.dispatchEvent(
      new CustomEvent(
        "businesspro-settings-updated",
        {
          detail:
            updatedSettings,
        }
      )
    );

  };


  /* =========================================
     CLOSE OTHER DROPDOWNS
  ========================================= */

  const handleNotificationClick = () => {

    setShowNotifications(
      (previous) => !previous
    );

    setShowProfile(false);

  };


  const handleProfileClick = () => {

    setShowProfile(
      (previous) => !previous
    );

    setShowNotifications(false);

  };


  /* =========================================
     PROFILE NAVIGATION
  ========================================= */

  const openSettings = () => {

    setShowProfile(false);

    navigate("/settings");

  };


  /* =========================================
     LOGOUT
     
     फिलहाल actual authentication नहीं है,
     इसलिए logout सिर्फ dropdown close करेगा.
  ========================================= */

  const handleLogout = () => {

    setShowProfile(false);

    alert(
      "Logout functionality will be connected with authentication later."
    );

  };


  /* =========================================
     CURRENT USER
  ========================================= */

  const userName =
    settings.name?.trim()
      ? settings.name
      : "Vikash Tiwari";


  const initials =
    getInitials(userName);


  /* =========================================
     UI
  ========================================= */

  return (

    <header className="navbar">


      {/* =====================================
          LEFT SIDE
      ===================================== */}

      <div className="navbar-title">

        <h2>
          Dashboard
        </h2>

        <p>
          Welcome back! Here's what's happening today.
        </p>

      </div>


      {/* =====================================
          RIGHT SIDE
      ===================================== */}

      <div className="navbar-right">


        {/* ===================================
            SEARCH
        =================================== */}

        <div className="global-search-wrapper">

          <div className="global-search-box">

            <Search
              size={18}
              className="global-search-icon"
            />


            <input
              type="text"
              placeholder="Search products, customers..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              autoComplete="off"
            />


            {search && (

              <button
                type="button"
                className="search-clear-button"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Clear search"
              >
                ×
              </button>

            )}

          </div>


          {/* SEARCH DROPDOWN */}

          {search.trim() !== "" && (

            <div className="global-search-dropdown">

              {filteredResults.length > 0 ? (

                filteredResults
                  .slice(0, 6)
                  .map((item, index) => {

                    let Icon = Package;


                    if (
                      item.type ===
                      "Customer"
                    ) {

                      Icon = Users;

                    }


                    if (
                      item.type ===
                      "Transaction"
                    ) {

                      Icon = Receipt;

                    }


                    return (

                      <button
                        type="button"
                        className="global-search-result"
                        key={`${item.type}-${item.name}-${index}`}
                        onClick={() =>
                          handleResultClick(
                            item.path
                          )
                        }
                      >

                        <div className="search-result-icon">

                          <Icon size={17} />

                        </div>


                        <div className="search-result-text">

                          <strong>
                            {item.name}
                          </strong>

                          <span>
                            {item.detail}
                          </span>

                        </div>


                        <span className="search-result-label">

                          {item.type}

                        </span>

                      </button>

                    );

                  })

              ) : (

                <div className="search-empty">

                  <Search size={18} />

                  <span>
                    No results found
                  </span>

                </div>

              )}

            </div>

          )}

        </div>


        {/* ===================================
            DARK MODE
        =================================== */}

        <button
          type="button"
          className="navbar-action"
          onClick={toggleDarkMode}
          title={
            settings.darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >

          {settings.darkMode ? (

            <Sun size={19} />

          ) : (

            <Moon size={19} />

          )}

        </button>


        {/* ===================================
            NOTIFICATIONS
        =================================== */}

        <div className="navbar-dropdown-wrapper">

          <button
            type="button"
            className="notification"
            onClick={
              handleNotificationClick
            }
            aria-label="Notifications"
          >

            <Bell size={20} />

            <span className="notification-dot"></span>

          </button>


          {showNotifications && (

            <div className="notification-dropdown">

              <div className="dropdown-heading">

                <strong>
                  Notifications
                </strong>

                <span>
                  3 new
                </span>

              </div>


              <div className="notification-row">

                <div className="notification-small-icon">

                  <CheckCircle size={16} />

                </div>


                <div>

                  <strong>
                    New order received
                  </strong>

                  <p>
                    Order #ORD-1025 received.
                  </p>

                  <small>
                    5 minutes ago
                  </small>

                </div>

              </div>


              <div className="notification-row">

                <div className="notification-small-icon">

                  <Bell size={16} />

                </div>


                <div>

                  <strong>
                    Low stock alert
                  </strong>

                  <p>
                    Basic Plan stock is low.
                  </p>

                  <small>
                    20 minutes ago
                  </small>

                </div>

              </div>


              <div className="notification-footer">

                View all notifications

              </div>

            </div>

          )}

        </div>


        {/* ===================================
            PROFILE
        =================================== */}

        <div className="navbar-dropdown-wrapper">

          <button
            type="button"
            className="profile"
            onClick={
              handleProfileClick
            }
          >

            <div className="avatar">

              {initials}

            </div>


            <div className="profile-info">

              <strong>
                {userName}
              </strong>

              <small>
                Administrator
              </small>

            </div>


            <ChevronDown
              size={17}
            />

          </button>


          {/* PROFILE DROPDOWN */}

          {showProfile && (

            <div className="profile-dropdown">


              {/* PROFILE HEADER */}

              <div className="profile-user">

                <div className="avatar">

                  {initials}

                </div>


                <div>

                  <strong>
                    {userName}
                  </strong>

                  <small>
                    Administrator
                  </small>

                </div>

              </div>


              <div className="dropdown-line"></div>


              {/* MY PROFILE */}

              <button
                type="button"
                onClick={() => {

                  setShowProfile(false);

                  navigate("/settings");

                }}
              >

                <User size={17} />

                <span>
                  My Profile
                </span>

              </button>


              {/* SETTINGS */}

              <button
                type="button"
                onClick={
                  openSettings
                }
              >

                <Settings size={17} />

                <span>
                  Account Settings
                </span>

              </button>


              <div className="dropdown-line"></div>


              {/* LOGOUT */}

              <button
                type="button"
                className="logout-menu"
                onClick={
                  handleLogout
                }
              >

                <LogOut size={17} />

                <span>
                  Logout
                </span>

              </button>

            </div>

          )}

        </div>

      </div>

    </header>

  );

};


export default Navbar;