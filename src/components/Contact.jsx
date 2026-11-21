import { useState } from 'react';
import { profile } from '../data';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Opens the visitor's email app with the message pre-filled.
  // Swap this for a backend endpoint / Formspree / EmailJS if you prefer.
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
  //   const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
  //   window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  // };
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Sending failed.");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const details = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact">
      <div className="section">
        <Reveal>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sunset-950/70 dark:text-sunset-100/70">
            Have a project in mind or just want to say hi? Send a message and I&apos;ll get back to you soon.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <Reveal className="space-y-4 md:col-span-2">
            {details.map((d) => (
              <div key={d.label} className="card !p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-sunset-600 dark:text-sunset-300">{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="mt-1 block break-words font-semibold hover:underline">
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold">{d.value}</p>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-1">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn btn-outline !px-5 !py-2">
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3">
            <form onSubmit={onSubmit} className="card space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Name
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    autoComplete="name"
                    placeholder="Your name"
                    className="input mt-1.5 font-normal"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="input mt-1.5 font-normal"
                  />
                </label>
              </div>
              <label className="block text-sm font-semibold">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Your message..."
                  className="input mt-1.5 resize-y font-normal"
                />
              </label>
              {/* <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Send message
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full sm:w-auto"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (
                 <p className="mt-2 text-sm text-green-600 dark:text-green-400 font-semibold" role="status">
                  ✓ Your message has been sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-semibold" role="alert">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
