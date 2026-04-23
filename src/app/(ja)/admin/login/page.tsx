import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "ログイン | 管理画面",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-6">
          管理画面ログイン
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
