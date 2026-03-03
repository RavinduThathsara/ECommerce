import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: login logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo / Brand */}
                <div className="mb-6 text-center">
                    <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow">
                        <span className="text-lg font-semibold">E</span>
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-slate-900">
                        Welcome back
                    </h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Password
                                    </label>
                                    <Link
                                        to="/forgot-password"
                                        className="text-sm font-medium text-slate-700 hover:text-slate-900"
                                    >
                                        Forgot?
                                    </Link>
                                </div>

                                <div className="mt-1 relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((s) => !s)}
                                        className="absolute inset-y-0 right-0 px-3 text-sm font-medium text-slate-600 hover:text-slate-900"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Row */}
                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20"
                                    />
                                    Remember me
                                </label>

                                <span className="text-xs text-slate-500">
                                    Secure login enabled
                                </span>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                            >
                                Sign in
                            </button>

                            {/* Divider */}
                            <div className="relative py-2">
                                <div className="h-px bg-slate-200" />
                                <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 bg-white px-3 text-xs text-slate-500">
                                    or
                                </span>
                            </div>

                            {/* Secondary actions */}
                            <button
                                type="button"
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                            >
                                Continue with Google
                            </button>
                        </form>
                    </div>

                    <div className="border-t border-slate-200 p-6 text-center">
                        <p className="text-sm text-slate-600">
                            Don’t have an account?{" "}
                            <Link
                                to="/register"
                                className="font-semibold text-slate-900 hover:underline"
                            >
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-slate-500">
                    By continuing, you agree to our{" "}
                    <Link to="/terms" className="hover:underline">
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}