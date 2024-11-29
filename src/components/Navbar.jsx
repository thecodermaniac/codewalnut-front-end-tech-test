"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">
        Pokémon Team Manager
      </h1>
      <div>
        {user ? (
          <>
            <Link href="/">
              <p className="text-blue-500 hover:underline mr-4">Home</p>
            </Link>
            <Link href="/teams">
              <p className="text-blue-500 hover:underline mr-4">Teams</p>
            </Link>
            <button onClick={logout} className="text-red-500 hover:underline">
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login">
            <p className="text-blue-500 hover:underline">Login</p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
