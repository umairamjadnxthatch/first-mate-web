"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, X } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [popup, setPopup] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));

        // Remove error as user starts typing
        if (value.trim()) {
            setErrors((prev) => ({
                ...prev,
                [id]: "",
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "Required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Required";
        }

        setErrors(newErrors);

        // Don't submit if there are errors
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Frontend-only success
        setPopup(true);
    };

    const closePopup = () => {
        setPopup(false);

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        });

        setErrors({});
    };

    return (
        <>
            <section className="bg-[#f0f4f9] pt-36 pb-16 sm:pt-36 sm:pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

                        {/* Left Column */}
                        <div className="flex flex-col justify-start lg:col-span-5">
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
                                        <p className="text-sm font-semibold text-[#0f172a]">
                                            Email
                                        </p>

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
                                        <p className="text-sm font-semibold text-[#0f172a]">
                                            Phone
                                        </p>

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
                                        <p className="text-sm font-semibold text-[#0f172a]">
                                            Location
                                        </p>

                                        <p className="mt-0.5 text-sm text-[#64748b]">
                                            Lake Norman, North Carolina, United States
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-slate-100/80 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.07)] sm:p-8">

                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="space-y-4"
                                >

                                    {/* Name Row */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                                        {/* First Name */}
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
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896] ${errors.firstName
                                                    ? "border-red-400"
                                                    : "border-slate-200"
                                                    }`}
                                            />

                                            {errors.firstName && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.firstName}
                                                </p>
                                            )}
                                        </div>

                                        {/* Last Name */}
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
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896] ${errors.lastName
                                                    ? "border-red-400"
                                                    : "border-slate-200"
                                                    }`}
                                            />

                                            {errors.lastName && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.lastName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
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
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896] ${errors.email
                                                ? "border-red-400"
                                                : "border-slate-200"
                                                }`}
                                        />

                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
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
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896] ${errors.subject
                                                ? "border-red-400"
                                                : "border-slate-200"
                                                }`}
                                        />

                                        {errors.subject && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.subject}
                                            </p>
                                        )}
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
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`mt-1.5 w-full resize-none rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#00a896] focus:ring-1 focus:ring-[#00a896] ${errors.message
                                                ? "border-red-400"
                                                : "border-slate-200"
                                                }`}
                                        />

                                        {errors.message && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-[#00a896] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#00a896]/30 transition-all duration-200 hover:scale-[1.02] hover:bg-[#009686] active:scale-[0.98]"
                                        >
                                            <span>Send Message</span>
                                            <Send className="h-4 w-4" />
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Success Popup */}
            {popup && (
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

                        {/* Success Icon */}
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f2fe] text-[#00a896]">
                            <CheckCircle className="h-7 w-7" />
                        </div>

                        <h3 className="mt-4 text-xl font-bold text-[#0f172a]">
                            Message Sent!
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                            Thanks for contacting First Mate. We&apos;ll get
                            back to you shortly.
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