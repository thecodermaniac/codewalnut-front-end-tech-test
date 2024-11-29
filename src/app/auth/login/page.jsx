"use client";
import React from "react";
import LoginForm from "../../../components/Auth/LoginForm";
import { useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect to the home page if already logged in
  if (user) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
    return null; // Prevent rendering while redirecting
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
