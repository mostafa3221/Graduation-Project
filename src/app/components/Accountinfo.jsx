"use client";
import { useState } from "react";

const Accountinfo = () => {
  const [activeTab, setActiveTab] = useState("account"); // tab state
  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Cole",
    email: "swoo@gmail.com",
    phone: "+1 0231 4554 452",
  });

  const [address, setAddress] = useState({
    country: "Egypt",
    city: "Cairo",
    street: "Tahrir St.",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved:", formData);
    alert("Account info saved!");
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Address Saved:", address);
    alert("Address saved!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirm) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password changed:", passwords);
    alert("Password changed successfully!");
  };

  return (
    <div className="flex min-h-full bg-gray-50 p-8 mt-[40px]">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold">
            {formData.firstName} {formData.lastName}
          </h2>
          <p className="text-gray-500 text-sm">{formData.email}</p>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { key: "account", label: "Account info" },
            { key: "order", label: "My order" },
            { key: "address", label: "My address" },
            { key: "password", label: "Change password" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full flex justify-between items-center px-4 py-2 text-left rounded-md ${
                activeTab === tab.key
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tab.label} <span>→</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white ml-6 p-8 rounded-lg shadow-sm">
        {activeTab === "account" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Account Info</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                SAVE
              </button>
            </form>
          </>
        )}

        {activeTab === "order" && (
          <>
            <h2 className="text-2xl font-bold mb-6">My Orders</h2>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Order ID</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">#1234</td>
                  <td className="p-2">2025-09-18</td>
                  <td className="p-2 text-green-600">Delivered</td>
                  <td className="p-2">$120.00</td>
                </tr>
                <tr>
                  <td className="p-2">#1235</td>
                  <td className="p-2">2025-09-15</td>
                  <td className="p-2 text-yellow-600">Processing</td>
                  <td className="p-2">$80.00</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === "address" && (
          <>
            <h2 className="text-2xl font-bold mb-6">My Address</h2>
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleAddressChange}
                placeholder="Country"
                className="block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                placeholder="City"
                className="block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                placeholder="Street Address"
                className="block w-full rounded-md border border-gray-300 p-2"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                SAVE ADDRESS
              </button>
            </form>
          </>
        )}

        {activeTab === "password" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Change Password</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Current Password"
                className="block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="password"
                name="newPass"
                value={passwords.newPass}
                onChange={handlePasswordChange}
                placeholder="New Password"
                className="block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                placeholder="Confirm New Password"
                className="block w-full rounded-md border border-gray-300 p-2"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                CHANGE PASSWORD
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Accountinfo;
