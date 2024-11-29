import React from "react";
import { useAuth } from "../../hooks/useAuth";

const LogoutButton = () => {
  const { logout, user } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center justify-center p-4">
      <p className="mr-4 text-gray-800 dark:text-gray-100">
        Logged in as: <strong>{user.username}</strong>
      </p>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
