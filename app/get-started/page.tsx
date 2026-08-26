"use client";

import Link from "next/link";
import { Mail, User, Lock, ArrowRight } from "lucide-react";

export default function GetStartedPage() {
    return (
        <main className="min-h-screen bg-[#f0f4f9] px-6 py-24 sm:py-28">
            <div className="mx-auto flex max-w-md flex-col items-center">
                {/* Header */}
                <div className="mb-8 text-center">
                    <span className="mb-5 inline-flex rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
                        Get Started
                    </span>

                    <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
                        Start your journey.
                    </h1>

                    <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-base">
                        Create your First Mate account and start building confidence on
                        the water.
                    </p>
                </div>

                {/* Form Card */}
                <div className="w-full rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-8">
                    <form className="space-y-5">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-[#0f172a]"
                            >
                                Full Name
                            </label>

                            <div className="relative">
                                <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] py-3 pl-11 pr-4 text-sm text-[#0f172a] outline-none transition focus:border-[#07557c] focus:ring-2 focus:ring-[#07557c]/10"
                                />
                            </div>
                        </div>

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
                                    className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] py-3 pl-11 pr-4 text-sm text-[#0f172a] outline-none transition focus:border-[#07557c] focus:ring-2 focus:ring-[#07557c]/10"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-[#0f172a]"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] py-3 pl-11 pr-4 text-sm text-[#0f172a] outline-none transition focus:border-[#07557c] focus:ring-2 focus:ring-[#07557c]/10"
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-2 text-xs leading-relaxed text-[#64748b]">
                            <input
                                type="checkbox"
                                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#07557c]"
                            />
                            <span>
                                I agree to the{" "}
                                <Link
                                    href="/terms-conditions"
                                    className="font-semibold text-[#07557c] hover:text-[#00a896]"
                                >
                                    Terms & Conditions
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="font-semibold text-[#07557c] hover:text-[#00a896]"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </span>
                        </label>

                        {/* Button */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#07557c] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#00a896] hover:shadow-lg"
                        >
                            Create Account
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </form>

                    {/* Login */}
                    <p className="mt-6 text-center text-sm text-[#64748b]">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-[#07557c] hover:text-[#00a896]"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}