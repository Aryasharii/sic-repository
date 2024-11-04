"use client";

import React, { useState } from "react"; 
import DataTable from "../components/table/data-table.jsx";
import InputTextValue from "../components/input/text/text-value.jsx";
import InputPasswordLabel from "../components/input/password/password-label.jsx";
import SecondaryButton from "../components/button/secondary/secondary-button.jsx";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("educator");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { username, phone, role, password, confirmPassword });
  };

  return (
    <div className="text-black shadow-sm">
      <h1 className="text-4xl font-extrabold tracking-widest text-center my-7">
        Tambah Pengguna
      </h1>
      <div className="w-2/3 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 border p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <label htmlFor="username" className="text-[#707070] text-2xl font-bold w-[40%]">Username</label>
            <InputTextValue
              id="username"
              value={username}
              error=""
              onChange={(e) => setUsername(e.target.value)}
              className="w-[60%] border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="text-[#707070] text-2xl font-bold w-[40%]">Nomor Telepon</label>
            <InputTextValue
              id="phone"
              value={phone}
              error=""
              onChange={(e) => setPhone(e.target.value)}
              className="w-[60%] border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="role" className="text-[#707070] text-2xl font-bold w-[41%]">Role</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-[43%] text-black outline-none rounded-lg px-3 py-2 border focus:border-[#276561] hover:border-[#27656179]"
            >
              <option value="educator">Educator</option>
              <option value="wasteCollector">Waste Collector</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className="text-[#707070] text-2xl font-bold w-[40%]">Kata Sandi</label>
            <InputPasswordLabel
              id="password"
              value={password}
              error=""
              onChange={(e) => setPassword(e.target.value)}
              className="w-[60%] border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="confirmPassword" className="text-[#707070] text-2xl font-bold w-[40%]">Konfirmasi Kata Sandi</label>
            <InputPasswordLabel
              id="confirmPassword"
              value={confirmPassword}
              error=""
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-[60%] border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex justify-end">
            <SecondaryButton
              text="Create"
              className="text-white bg-[#007AFF] font-extrabold w-[200px]"
            />
          </div>
        </form>
      </div>

      <div className="w-2/3 mx-auto">
        <h1 className="text-4xl font-extrabold tracking-widest text-center my-7 mt-10">
          Daftar Pengguna
        </h1>
        <DataTable />
      </div>
    </div>
  );
}
