import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: signup logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                {/* Logo / Brand */}
                <div className="mb-6 text-center">
                    <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow">
                        <span className="text-lg font-semibold">S</span>
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-slate-900">
                        Create your account
                    </h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Join us and start shopping today
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                />
                            </div>

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
                                <label className="block text-sm font-medium text-slate-700">
                                    Password
                                </label>
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

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((s) => !s)}
                                        className="absolute inset-y-0 right-0 px-3 text-sm font-medium text-slate-600 hover:text-slate-900"
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20"
                                />
                                <label className="text-sm text-slate-700">
                                    I agree to the{" "}
                                    <Link to="/terms" className="font-medium text-slate-900 hover:underline">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link to="/privacy" className="font-medium text-slate-900 hover:underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                            >
                                Create Account
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
                                Sign up with Google
                            </button>
                        </form>
                    </div>

                    <div className="border-t border-slate-200 p-6 text-center">
                        <p className="text-sm text-slate-600">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-slate-900 hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
