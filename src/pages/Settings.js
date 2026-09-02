import React, { useEffect, useState } from "react";

import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Save,
  Camera,
  CheckCircle,
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

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

const STORAGE_KEY = "businesspro-settings";


// ======================================
// GET SAVED SETTINGS
// ======================================

const getSavedSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return {
        ...DEFAULT_SETTINGS,
        ...JSON.parse(saved),
      };
    }

    return DEFAULT_SETTINGS;
  } catch (error) {
    return DEFAULT_SETTINGS;
  }
};


// ======================================
// GET INITIALS
// ======================================

const getInitials = (name) => {
  if (!name || !name.trim()) {
    return "VT";
  }

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }

  return (
    words[0][0] + words[words.length - 1][0]
  ).toUpperCase();
};


const Settings = () => {

  const [activeTab, setActiveTab] = useState("profile");

  const [settings, setSettings] = useState(
    getSavedSettings
  );

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);


  // ======================================
  // DARK MODE
  // ======================================

  useEffect(() => {

    if (settings.darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

  }, [settings.darkMode]);


  // ======================================
  // UPDATE SETTING
  // ======================================

  const updateSetting = (key, value) => {

    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));

  };


  // ======================================
  // SHOW MESSAGE
  // ======================================

  const showMessage = (text, type = "success") => {

    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3000);

  };


  // ======================================
  // SAVE SETTINGS
  // ======================================

  const handleSave = () => {

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
      );


      // IMPORTANT:
      // Navbar ko immediately update karne ke liye
      window.dispatchEvent(
        new CustomEvent(
          "businesspro-settings-updated",
          {
            detail: settings,
          }
        )
      );


      showMessage(
        "Settings saved successfully!"
      );

    } catch (error) {

      console.error(error);

      showMessage(
        "Unable to save settings.",
        "error"
      );

    }

  };


  // ======================================
  // PASSWORD UPDATE
  // ======================================

  const handlePasswordUpdate = () => {

    if (!currentPassword) {

      showMessage(
        "Please enter your current password.",
        "error"
      );

      return;
    }


    if (!newPassword) {

      showMessage(
        "Please enter a new password.",
        "error"
      );

      return;
    }


    if (newPassword.length < 6) {

      showMessage(
        "New password must contain at least 6 characters.",
        "error"
      );

      return;
    }


    if (newPassword !== confirmPassword) {

      showMessage(
        "New password and confirm password do not match.",
        "error"
      );

      return;
    }


    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");


    showMessage(
      "Password updated successfully!"
    );

  };


  // ======================================
  // CHANGE PHOTO
  // ======================================

  const handleChangePhoto = () => {

    showMessage(
      "Photo upload feature will be added soon."
    );

  };


  return (

    <main className="dashboard-content settings-page">


      {/* =====================================
          TOAST MESSAGE
      ====================================== */}

      {message && (

        <div
          className={`settings-toast ${
            messageType === "error"
              ? "error"
              : ""
          }`}
        >

          <CheckCircle size={18} />

          <span>
            {message}
          </span>

        </div>

      )}


      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <div className="settings-page-header">

        <div>

          <h1>
            Settings
          </h1>

          <p>
            Manage your account, preferences and
            application settings.
          </p>

        </div>


        <button
          type="button"
          className="settings-main-save"
          onClick={handleSave}
        >

          <Save size={17} />

          Save Changes

        </button>

      </div>


      {/* =====================================
          SETTINGS LAYOUT
      ====================================== */}

      <div className="settings-layout">


        {/* =====================================
            LEFT MENU
        ====================================== */}

        <aside className="settings-menu">

          <div className="settings-menu-title">
            SETTINGS
          </div>


          <button
            type="button"
            className={
              activeTab === "profile"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("profile")
            }
          >

            <User size={17} />

            <span>
              Profile
            </span>

          </button>


          <button
            type="button"
            className={
              activeTab === "notifications"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("notifications")
            }
          >

            <Bell size={17} />

            <span>
              Notifications
            </span>

          </button>


          <button
            type="button"
            className={
              activeTab === "security"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("security")
            }
          >

            <Shield size={17} />

            <span>
              Security
            </span>

          </button>


          <button
            type="button"
            className={
              activeTab === "appearance"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("appearance")
            }
          >

            <Palette size={17} />

            <span>
              Appearance
            </span>

          </button>


          <button
            type="button"
            className={
              activeTab === "language"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("language")
            }
          >

            <Globe size={17} />

            <span>
              Language & Region
            </span>

          </button>

        </aside>


        {/* =====================================
            RIGHT CONTENT
        ====================================== */}

        <section className="settings-content">


          {/* =====================================
              PROFILE
          ====================================== */}

          {activeTab === "profile" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>

                  <h2>
                    Profile Settings
                  </h2>

                  <p>
                    Update your personal information
                    and profile details.
                  </p>

                </div>

              </div>


              {/* PROFILE HEADER */}

              <div className="profile-section">

                <div className="profile-avatar">

                  {getInitials(settings.name)}

                </div>


                <div className="profile-user-details">

                  <h3>
                    {settings.name || "Vikash Tiwari"}
                  </h3>

                  <p>
                    Business Administrator
                  </p>


                  <button
                    type="button"
                    className="change-photo-btn"
                    onClick={handleChangePhoto}
                  >

                    <Camera size={14} />

                    Change Photo

                  </button>

                </div>

              </div>


              {/* FORM */}

              <div className="settings-form">


                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={settings.name}
                    placeholder="Enter your full name"
                    onChange={(e) =>
                      updateSetting(
                        "name",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={settings.email}
                    placeholder="Enter your email"
                    onChange={(e) =>
                      updateSetting(
                        "email",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="text"
                    value={settings.phone}
                    placeholder="Enter your phone number"
                    onChange={(e) =>
                      updateSetting(
                        "phone",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    Role
                  </label>

                  <input
                    type="text"
                    value="Administrator"
                    disabled
                  />

                </div>

              </div>


              {/* FOOTER */}

              <div className="settings-card-footer">

                <button
                  type="button"
                  className="settings-secondary-save"
                  onClick={handleSave}
                >

                  <Save size={15} />

                  Save Profile

                </button>

              </div>

            </div>

          )}


          {/* =====================================
              NOTIFICATIONS
          ====================================== */}

          {activeTab === "notifications" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>

                  <h2>
                    Notification Settings
                  </h2>

                  <p>
                    Control the notifications you receive.
                  </p>

                </div>

              </div>


              <div className="settings-options">


                {/* EMAIL */}

                <div className="settings-option">

                  <div className="option-icon">
                    <Bell size={18} />
                  </div>


                  <div className="option-content">

                    <strong>
                      Email Notifications
                    </strong>

                    <p>
                      Receive important updates
                      through email.
                    </p>

                  </div>


                  <label className="modern-toggle">

                    <input
                      type="checkbox"
                      checked={
                        settings.emailNotifications
                      }
                      onChange={(e) =>
                        updateSetting(
                          "emailNotifications",
                          e.target.checked
                        )
                      }
                    />

                    <span></span>

                  </label>

                </div>


                {/* ORDER */}

                <div className="settings-option">

                  <div className="option-icon">
                    <Bell size={18} />
                  </div>


                  <div className="option-content">

                    <strong>
                      Order Notifications
                    </strong>

                    <p>
                      Get notified about new orders
                      and transactions.
                    </p>

                  </div>


                  <label className="modern-toggle">

                    <input
                      type="checkbox"
                      checked={
                        settings.orderNotifications
                      }
                      onChange={(e) =>
                        updateSetting(
                          "orderNotifications",
                          e.target.checked
                        )
                      }
                    />

                    <span></span>

                  </label>

                </div>


                {/* MARKETING */}

                <div className="settings-option">

                  <div className="option-icon">
                    <Globe size={18} />
                  </div>


                  <div className="option-content">

                    <strong>
                      Marketing Notifications
                    </strong>

                    <p>
                      Receive promotional and
                      marketing updates.
                    </p>

                  </div>


                  <label className="modern-toggle">

                    <input
                      type="checkbox"
                      checked={
                        settings.marketingNotifications
                      }
                      onChange={(e) =>
                        updateSetting(
                          "marketingNotifications",
                          e.target.checked
                        )
                      }
                    />

                    <span></span>

                  </label>

                </div>

              </div>


              <div className="settings-card-footer">

                <button
                  type="button"
                  className="settings-secondary-save"
                  onClick={handleSave}
                >

                  <Save size={15} />

                  Save Notifications

                </button>

              </div>

            </div>

          )}


          {/* =====================================
              SECURITY
          ====================================== */}

          {activeTab === "security" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>

                  <h2>
                    Security
                  </h2>

                  <p>
                    Manage your password and account security.
                  </p>

                </div>

              </div>


              <div className="security-info-box">

                <Lock size={18} />

                <div>

                  <strong>
                    Password Security
                  </strong>

                  <p>
                    Use at least 6 characters for
                    a secure password.
                  </p>

                </div>

              </div>


              <div className="settings-form security-form">


                {/* CURRENT PASSWORD */}

                <div className="form-group">

                  <label>
                    Current Password
                  </label>


                  <div className="password-wrapper">

                    <input
                      type={
                        showCurrentPassword
                          ? "text"
                          : "password"
                      }
                      value={currentPassword}
                      onChange={(e) =>
                        setCurrentPassword(
                          e.target.value
                        )
                      }
                      placeholder="Enter current password"
                    />


                    <button
                      type="button"
                      onClick={() =>
                        setShowCurrentPassword(
                          (previous) => !previous
                        )
                      }
                    >

                      {showCurrentPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}

                    </button>

                  </div>

                </div>


                {/* NEW PASSWORD */}

                <div className="form-group">

                  <label>
                    New Password
                  </label>


                  <div className="password-wrapper">

                    <input
                      type={
                        showNewPassword
                          ? "text"
                          : "password"
                      }
                      value={newPassword}
                      onChange={(e) =>
                        setNewPassword(
                          e.target.value
                        )
                      }
                      placeholder="Enter new password"
                    />


                    <button
                      type="button"
                      onClick={() =>
                        setShowNewPassword(
                          (previous) => !previous
                        )
                      }
                    >

                      {showNewPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}

                    </button>

                  </div>

                </div>


                {/* CONFIRM PASSWORD */}

                <div className="form-group">

                  <label>
                    Confirm Password
                  </label>


                  <div className="password-wrapper">

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(
                          e.target.value
                        )
                      }
                      placeholder="Confirm new password"
                    />


                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (previous) => !previous
                        )
                      }
                    >

                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}

                    </button>

                  </div>

                </div>

              </div>


              <div className="settings-card-footer">

                <button
                  type="button"
                  className="settings-secondary-save"
                  onClick={handlePasswordUpdate}
                >

                  <Shield size={15} />

                  Update Password

                </button>

              </div>

            </div>

          )}


          {/* =====================================
              APPEARANCE
          ====================================== */}

          {activeTab === "appearance" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>

                  <h2>
                    Appearance
                  </h2>

                  <p>
                    Customize the look and feel
                    of your dashboard.
                  </p>

                </div>

              </div>


              <div className="appearance-main-option">

                <div className="appearance-left">

                  <div className="appearance-icon">

                    <Palette size={19} />

                  </div>


                  <div>

                    <strong>
                      Dark Mode
                    </strong>

                    <p>
                      Use dark colors throughout
                      the dashboard.
                    </p>

                  </div>

                </div>


                <label className="modern-toggle">

                  <input
                    type="checkbox"
                    checked={settings.darkMode}
                    onChange={(e) =>
                      updateSetting(
                        "darkMode",
                        e.target.checked
                      )
                    }
                  />

                  <span></span>

                </label>

              </div>


              {/* THEME */}

              <div className="theme-selection">

                <button
                  type="button"
                  className={
                    !settings.darkMode
                      ? "theme-card selected"
                      : "theme-card"
                  }
                  onClick={() =>
                    updateSetting(
                      "darkMode",
                      false
                    )
                  }
                >

                  <div className="theme-preview-light">

                    <div></div>
                    <div></div>
                    <div></div>

                  </div>

                  <strong>
                    Light
                  </strong>


                  {!settings.darkMode && (
                    <CheckCircle size={17} />
                  )}

                </button>


                <button
                  type="button"
                  className={
                    settings.darkMode
                      ? "theme-card selected"
                      : "theme-card"
                  }
                  onClick={() =>
                    updateSetting(
                      "darkMode",
                      true
                    )
                  }
                >

                  <div className="theme-preview-dark">

                    <div></div>
                    <div></div>
                    <div></div>

                  </div>

                  <strong>
                    Dark
                  </strong>


                  {settings.darkMode && (
                    <CheckCircle size={17} />
                  )}

                </button>

              </div>


              <div className="settings-card-footer">

                <button
                  type="button"
                  className="settings-secondary-save"
                  onClick={handleSave}
                >

                  <Save size={15} />

                  Save Appearance

                </button>

              </div>

            </div>

          )}


          {/* =====================================
              LANGUAGE
          ====================================== */}

          {activeTab === "language" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>

                  <h2>
                    Language & Region
                  </h2>

                  <p>
                    Select your preferred language
                    and time zone.
                  </p>

                </div>

              </div>


              <div className="settings-form">


                <div className="form-group">

                  <label>
                    Language
                  </label>


                  <select
                    value={settings.language}
                    onChange={(e) =>
                      updateSetting(
                        "language",
                        e.target.value
                      )
                    }
                  >

                    <option value="English">
                      English
                    </option>

                    <option value="Hindi">
                      Hindi
                    </option>

                    <option value="Spanish">
                      Spanish
                    </option>

                    <option value="French">
                      French
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    Time Zone
                  </label>


                  <select
                    value={settings.timeZone}
                    onChange={(e) =>
                      updateSetting(
                        "timeZone",
                        e.target.value
                      )
                    }
                  >

                    <option value="IST">
                      India Standard Time (IST)
                    </option>

                    <option value="UTC">
                      UTC
                    </option>

                    <option value="EST">
                      Eastern Time
                    </option>

                  </select>

                </div>

              </div>


              <div className="region-preview">

                <Globe size={20} />

                <div>

                  <strong>
                    Current Region
                  </strong>

                  <p>

                    {settings.language}

                    {" • "}

                    {settings.timeZone === "IST"
                      ? "India Standard Time"
                      : settings.timeZone}

                  </p>

                </div>

              </div>


              <div className="settings-card-footer">

                <button
                  type="button"
                  className="settings-secondary-save"
                  onClick={handleSave}
                >

                  <Save size={15} />

                  Save Preferences

                </button>

              </div>

            </div>

          )}

        </section>

      </div>

    </main>

  );
};

export default Settings;