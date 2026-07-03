"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-apki-green/30 bg-apki-green/5 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-apki-green">
          Thank you — message received.
        </h3>
        <p className="mt-2 text-sm text-apki-charcoal/70">
          A member of the APKI team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append(
          "access_key",
          process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""
        );
        formData.append("subject", "New enquiry from apkindustries.com");
        formData.append("from_name", "APKI Website Contact Form");

        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          });
          const result = await response.json();

          if (result.success) {
            setStatus("sent");
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      }}
      className="space-y-5"
    >
      {/* Honeypot — hidden from real visitors, catches simple spam bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Organisation" name="organisation" type="text" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-apki-charcoal/70">
          Area of interest
        </label>
        <select
          name="interest"
          className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-apki-navy focus:border-apki-green focus:outline-none"
          defaultValue="Humanitarian / NGO deployment"
        >
          <option>Humanitarian / NGO deployment</option>
          <option>Defence / field operations</option>
          <option>Emergency services</option>
          <option>Utility / DNO procurement</option>
          <option>Home / critical medical care</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-apki-charcoal/70">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-apki-navy focus:border-apki-green focus:outline-none"
          placeholder="Tell us about your deployment requirements..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">
          Something went wrong sending your message. Please try again, or email us
          directly at{" "}
          <a href="mailto:alan@apkindustries.com" className="underline">
            alan@apkindustries.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-apki-green px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-apki-charcoal/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-apki-navy focus:border-apki-green focus:outline-none"
      />
    </div>
  );
}
