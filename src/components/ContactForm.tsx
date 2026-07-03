"use client";

import { useState } from "react";

const RECIPIENT = "alan@apkindustries.com";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <div className="rounded-sm border border-apki-green/30 bg-apki-green/5 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-apki-green">
          Your email app should now be open.
        </h3>
        <p className="mt-2 text-sm text-apki-charcoal/70">
          We&apos;ve drafted a message to the APKI team with your details filled
          in — just hit send from there. If nothing opened, email us directly at{" "}
          <a href={`mailto:${RECIPIENT}`} className="underline">
            {RECIPIENT}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get("name") as string;
        const organisation = data.get("organisation") as string;
        const email = data.get("email") as string;
        const phone = data.get("phone") as string;
        const interest = data.get("interest") as string;
        const message = data.get("message") as string;

        const subject = `Website enquiry — ${interest}`;
        const body = [
          `Name: ${name}`,
          `Organisation: ${organisation}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          `Area of interest: ${interest}`,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n");

        const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
        setOpened(true);
      }}
      className="space-y-5"
    >
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

      <button
        type="submit"
        className="rounded-sm bg-apki-green px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
      >
        Send Message
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
