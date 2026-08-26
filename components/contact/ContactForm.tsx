"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="bg-[#f0f4f9] pt-36 pb-16 sm:pt-36 sm:pb-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">

                    {/* ── Left Column: Contact Info ── */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <h1 className="text-[2.75rem] font-extrabold leading-[1.15] tracking-tight text-[#0f172a] sm:text-5xl">
                            We&apos;re Here to Help
                        </h1>
                        <p className="mt-3 text-sm text-[#64748b]">
                            We&apos;re Here to Help
                        </p>

                        <div className="mt-8 space-y-5">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe]/80 text-[#00a896]">
                                    <Mail className="h-4.5 w-4.5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-[#0f172a]">Email</p>
                                    <a
                                        href="mailto:support@firstmate.ai"
                                        className="mt-0.5 block text-sm text-[#64748b] transition hover:text-[#00a896]"
                                    >
                                        support@firstmate.ai
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe]/80 text-[#00a896]">
                                    <Phone className="h-4.5 w-4.5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-[#0f172a]">Phone</p>
                                    <a
                                        href="tel:+17041234567"
                                        className="mt-0.5 block text-sm text-[#64748b] transition hover:text-[#00a896]"
                                    >
                                        (704) 123-4567
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe]/80 text-[#00a896]">
                                    <MapPin className="h-4.5 w-4.5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-[#0f172a]">Location</p>
                                    <p className="mt-0.5 text-sm text-[#64748b]">
                                        Lake Norman, North Carolina, United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Form Card ── */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-slate-100/80 bg-white p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
                            {submitted ? (
                                <div className="py-12 text-center">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f2fe] text-[#00a896]">
                                        <Send className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold text-[#0f172a]">
                                        Message Sent!
                                    </h3>
                                    <p className="mt-2 text-sm text-[#64748b]">
                                        Thank you for reaching out. We&apos;ll get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Row */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block text-sm font-semibold text-[#0f172a]"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                placeholder="Jane"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, firstName: e.target.value })
                                                }
                                                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0f172a] placeholder-slate-400 outline-none transition focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896]"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block text-sm font-semibold text-[#0f172a]"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                placeholder="Harbor"
                                                required
                                                value={formData.lastName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, lastName: e.target.value })
                                                }
                                                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0f172a] placeholder-slate-400 outline-none transition focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896]"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-[#0f172a]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="jane@example.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0f172a] placeholder-slate-400 outline-none transition focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896]"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-semibold text-[#0f172a]"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="How can we help?"
                                            required
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({ ...formData, subject: e.target.value })
                                            }
                                            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0f172a] placeholder-slate-400 outline-none transition focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896]"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-[#0f172a]"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            placeholder="Tell us a bit more..."
                                            required
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#0f172a] placeholder-slate-400 outline-none transition focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896]"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-2.5 rounded-xl bg-[#00a896] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#00a896]/30 transition-all duration-200 hover:bg-[#009686] hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <span>Send Message</span>
                                            <Send className="h-4 w-4" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}