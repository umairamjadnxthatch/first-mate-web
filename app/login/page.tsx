"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Mail,
    Lock,
    ArrowRight,
    Eye,
    EyeOff,
    CheckCircle,
    X,
} from "lucide-react";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { id, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }));

        if (value?.trim()) {
            setErrors((prev) => ({
                ...prev,
                [id]: "",
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};

        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Required";
        }
        if (!formData.remember) {
            newErrors.remember = "Please select Remember me";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Frontend-only login simulation
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            // Clear all fields after successful submit
            setFormData({
                email: "",
                password: "",
                remember: false,
            });
            setShowPopup(true);
        }, 800);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <main className="min-h-screen bg-[#f0f4f9] px-6 py-24 sm:py-28">
                <div className="mx-auto flex max-w-md flex-col items-center">

                    {/* Header */}
                    <div className="mb-8 text-center">
                        <span className="mb-5 inline-flex rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
                            Welcome Back
                        </span>

                        <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
                            Welcome back.
                        </h1>

                        <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-base">
                            Sign in to continue your First Mate experience.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="w-full rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-8">
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="space-y-5"
                        >

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-[#0f172a]"
                                >
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full rounded-xl border bg-[#f8fafc] py-3 pl-11 pr-4 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#07557c] focus:ring-2 focus:ring-[#07557c]/10 ${errors.email
                                            ? "border-red-400"
                                            : "border-slate-200"
                                            }`}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-[#0f172a]"
                                    >
                                        Password
                                    </label>

                                    <Link
                                        href="/forgot-password"
                                        className="text-xs font-semibold text-[#07557c] transition hover:text-[#00a896]"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full rounded-xl border bg-[#f8fafc] py-3 pl-11 pr-11 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#07557c] focus:ring-2 focus:ring-[#07557c]/10 ${errors.password
                                            ? "border-red-400"
                                            : "border-slate-200"
                                            }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#64748b] transition hover:text-[#07557c]"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="mt-1.5 text-xs text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Remember */}
                            <div>
                                <label className="flex cursor-pointer items-center gap-2 text-sm text-[#64748b]">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className={`h-4 w-4 cursor-pointer rounded border-slate-300 accent-[#07557c] ${errors.remember ? "border-red-400" : ""
                                            }`}
                                    />
                                    Remember me
                                </label>

                                {errors.remember && (
                                    <p className="mt-1.5 text-xs text-red-500">
                                        {errors.remember}
                                    </p>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#07557c] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#00a896] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isLoading ? "Signing In..." : "Sign In"}

                                {!isLoading && (
                                    <ArrowRight className="h-4 w-4" />
                                )}
                            </button>
                        </form>

                        {/* Register */}
                        <p className="mt-6 text-center text-sm text-[#64748b]">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="https://first-mate-beta.vercel.app/signup"
                                className="font-semibold text-[#07557c] hover:text-[#00a896]"
                            >
                                Get Started
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Success Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm">
                    <div className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">

                        {/* Close */}
                        <button
                            type="button"
                            onClick={closePopup}
                            aria-label="Close popup"
                            className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#64748b] transition hover:bg-slate-100 hover:text-[#0f172a]"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Icon */}
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f2fe] text-[#00a896]">
                            <CheckCircle className="h-7 w-7" />
                        </div>

                        <h3 className="mt-4 text-xl font-bold text-[#0f172a]">
                            Sign In Successful!
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                            Welcome back to First Mate. You&apos;re ready to
                            continue your learning journey.
                        </p>

                        <button
                            type="button"
                            onClick={closePopup}
                            className="mt-6 cursor-pointer rounded-xl bg-[#07557c] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#053d5a]"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}