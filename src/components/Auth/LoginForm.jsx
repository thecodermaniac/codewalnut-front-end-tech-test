import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username); // Call the login function from context
    } else {
      alert("Please enter a valid username");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center p-4 border rounded-lg shadow-md max-w-sm mx-auto bg-white dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Login
      </h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded-lg mb-4 w-full dark:bg-gray-700 dark:text-gray-200"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
