"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

type ContactMessageFormProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactMessageForm({
  buttonLabel = "Get Solution",
  className = "",
}: ContactMessageFormProps) {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof initialForm, string>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  }

  function validateForm() {
    const nextErrors: Partial<Record<keyof typeof initialForm, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "Message must be at least 20 characters.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm();

    setErrors(nextErrors);
    setError("");
    setSuccess("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setSuccess("Your message has been sent successfully.");
      setForm(initialForm);

      setErrors({});
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Unable to send message.";

      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`flex mt-10 items-center  justify-center  font-sans antialiased ${className}`}
    >
      <div className="relative flex w-full max-w-7xl overflow-hidden rounded-lg   transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,174,239,0.15)] md:flex-row">
        {/* Left Side */}
<div className="relative hidden w-1/2 overflow-hidden bg-slate-900  text-white md:flex md:flex-col md:items-center md:justify-center">
  {/* Background Video Component */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 z-0 h-full w-full object-cover opacity-40 mix-blend-screen"
  >
    <source src="/videos/contact.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Centered Content overlay */}
  <div className="relative z-10  max-w-md">
    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
      Contact us
    </h1>
    <p className="mt-4 text-base text-slate-300">
      Do you have a question or want to contact Prisma AI sales? Kindly enter your information and describe your inquiry, and we’ll get back to you as soon as possible.
    </p>
    
    {/* Social icons container moved inside for unified layout */}
    <div className="mt-6 flex justify-center gap-4">
      {/* Social icons here if needed */}
    </div>
  </div>
</div>
        {/* Right Side */}
        <div className="w-full bg-[#0d1425] p-8 sm:p-12 md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold text-white">Let’s Get In Touch</h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded-lg border border-slate-500 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20"
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full rounded-lg border border-slate-500 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full rounded-lg border border-slate-500 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20"
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full rounded-lg border border-slate-500 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-lg border border-slate-500 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20"
              />

              {errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

       

            {/* Error */}
            {error && (
              <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-xl bg-green-50 p-3 text-sm text-green-600">
                {success}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00AEEF] px-4 py-3.5 text-sm 
                font-semibold text-white transition-all duration-300 hover:bg-[#00AEEF] hover:shadow-lg 
                 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {isSubmitting ? "Sending..." : buttonLabel}
                </span>

                {!isSubmitting && (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

