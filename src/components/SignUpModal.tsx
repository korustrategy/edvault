"use client";
import { useState } from "react";

interface SignUpModalProps {
  open: boolean;
  onClose: () => void;
}

const INTEREST_OPTIONS = [
  "Board membership",
  "Advisor",
  "Early funder",
  "District partner",
  "Education service provider",
  "Policy / research",
  "General interest",
];

export default function SignUpModal({ open, onClose }: SignUpModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    interest: [] as string[],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!open) return null;

  function toggleInterest(option: string) {
    setForm((prev) => ({
      ...prev,
      interest: prev.interest.includes(option)
        ? prev.interest.filter((i) => i !== option)
        : [...prev.interest, option],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white w-full max-w-lg p-8 relative"
        style={{ border: "1px solid #d1d5db" }}
      >
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "1rem", right: "1.25rem", color: "#6b7280", fontSize: "1.25rem", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Close"
        >
          ×
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <div style={{ color: "#1e2d4a", fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
            <h2 style={{ fontFamily: "Georgia, serif", color: "#1e2d4a", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              Thank you.
            </h2>
            <p style={{ fontFamily: "Georgia, serif", color: "#374151", fontSize: "0.95rem", lineHeight: "1.7" }}>
              We'll be in touch as EDVAULT takes shape. Your interest means a great deal at this stage.
            </p>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Georgia, serif", color: "#1e2d4a", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Stay Informed
            </h2>
            <p style={{ fontFamily: "Georgia, serif", color: "#6b7280", fontSize: "0.9rem", marginBottom: "1.75rem", lineHeight: "1.6", fontStyle: "italic" }}>
              EDVAULT is in formation. If this concept resonates, we'd welcome a conversation.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  required
                  style={inputStyle}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  required
                  type="email"
                  style={inputStyle}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@organization.org"
                />
              </div>
              <div>
                <label style={labelStyle}>Organization / Role</label>
                <input
                  style={inputStyle}
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  placeholder="e.g. Jefferson County Schools, VP of Learning"
                />
              </div>
              <div>
                <label style={labelStyle}>I'm interested as... (select all that apply)</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {INTEREST_OPTIONS.map((option) => {
                    const selected = form.interest.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleInterest(option)}
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "0.8rem",
                          padding: "0.35rem 0.75rem",
                          border: selected ? "1.5px solid #1e2d4a" : "1.5px solid #d1d5db",
                          backgroundColor: selected ? "#1e2d4a" : "transparent",
                          color: selected ? "#ffffff" : "#374151",
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {status === "error" && (
                <p style={{ color: "#8b1a2e", fontFamily: "Georgia, serif", fontSize: "0.875rem" }}>
                  Something went wrong. Please email us directly at team@edvault.org.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  backgroundColor: "#1e2d4a",
                  color: "#ffffff",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  letterSpacing: "0.05em",
                  padding: "0.75rem",
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                  marginTop: "0.5rem",
                }}
              >
                {status === "loading" ? "Submitting..." : "Request a Conversation"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Georgia, serif",
  fontSize: "0.8rem",
  letterSpacing: "0.08em",
  color: "#374151",
  textTransform: "uppercase",
  marginBottom: "0.4rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "Georgia, serif",
  fontSize: "0.95rem",
  padding: "0.6rem 0.75rem",
  border: "1px solid #d1d5db",
  outline: "none",
  color: "#374151",
  backgroundColor: "#ffffff",
};
