"use client";

import { useEffect, useState } from "react";

const RECIPIENT = "alan@apkindustries.com";

const INTERESTS = [
  "Humanitarian / NGO deployment",
  "Defence / field operations",
  "Emergency services",
  "Utility / DNO procurement",
  "Home / critical medical care",
  "Documentation / data sheets",
  "Other",
];

export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [message, setMessage] = useState("");

  // Pages can deep-link into a pre-filled enquiry, e.g. a "Request Data
  // Sheets" button linking to /contact?enquiry=data-sheets.
  useEffect(() => {
    // Deep-linked query param, only knowable client-side — reading it and
    // pre-filling the form here (rather than deriving it during render) is
    // the correct use of an effect, despite the lint heuristic below.
    const params = new URLSearchParams(window.location.search);
    if (params.get("enquiry") === "data-sheets") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInterest("Documentation / data sheets");
      setMessage(
        "Please send me the full data sheets and technical documentation for the APKI 2200Li."
      );
    }
  }, []);

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
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-apki-navy focus:border-apki-green focus:outline-none"
        >
          {INTERESTS.map((option) => (
            <option key={option}>{option}</option>
          ))}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
