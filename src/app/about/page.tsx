"use client";
import { useState } from "react";
import SignUpModal from "@/components/SignUpModal";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1e2d4a" }} className="px-6 py-20 text-center">
        <h1
          style={{
            fontFamily: "Georgia, serif",
            color: "#ffffff",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: "bold",
          }}
        >
          About EDVAULT
        </h1>
        <div style={{ width: "3rem", height: "2px", backgroundColor: "#8b1a2e", margin: "1.25rem auto 0" }} />
      </section>

      {/* Why EDVAULT Exists */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Label>Why EDVAULT Exists</Label>
        <p style={bodyStyle}>
          Every dollar spent on education services is a promise to a student. Too often that promise
          goes unmeasured, unverified, and unkept. EDVAULT exists to change that by serving as the
          neutral infrastructure that makes outcomes-based contracts work, ensuring that when
          districts and providers make commitments to students, those commitments are measured
          honestly, held accountable, and settled on evidence.
        </p>
      </section>

      <Divider />

      {/* What We Believe */}
      <section style={{ backgroundColor: "#f8f7f5" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <Label>What We Believe</Label>
          <p style={{ ...bodyStyle, marginBottom: "2.5rem" }}>
            EDVAULT is organized around four foundational convictions.
          </p>
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Neutrality is everything.",
                body: "EDVAULT holds the singular position that makes outcomes-based contracting possible: trusted equally by districts and providers. That trust is the foundation every contract is built on, and we protect it in everything we do.",
              },
              {
                title: "Student outcomes are the only standard.",
                body: "Every decision EDVAULT makes, including how we measure, how we hold funds, and how we rule on disputes, is evaluated against one question: did students improve? Districts and providers both answer to that standard, and so do we.",
              },
              {
                title: "Judgment rests on evidence.",
                body: "EDVAULT measures against pre-agreed benchmarks and implementation criteria and decides based on what the data shows. Our rulings are trusted because our process is rigorous, transparent, and consistent every time.",
              },
              {
                title: "We are the vault.",
                body: "What enters EDVAULT's custody is protected with absolute integrity. Student data is held under the highest privacy and security standards. Funds are released only when outcomes are verified. What we hold is safe, and our decisions are binding.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ width: "4px", flexShrink: 0, backgroundColor: "#8b1a2e", marginTop: "0.3rem", alignSelf: "stretch", minHeight: "100%" }} />
                <div>
                  <h3 style={{ fontFamily: "Georgia, serif", color: "#1e2d4a", fontSize: "1.1rem", marginBottom: "0.5rem", fontStyle: "italic" }}>
                    {title}
                  </h3>
                  <p style={bodyStyle}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Who Is Building This */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Label>Who Is Building This</Label>
        <p style={{ ...bodyStyle, marginBottom: "1.25rem" }}>
          EDVAULT is being built by a growing coalition of education leaders, data privacy experts,
          policy advocates, and outcomes-focused practitioners who share a conviction that the
          infrastructure for outcomes-based contracting must be neutral, rigorous, and independent.
        </p>
        <p style={{ ...bodyStyle, marginBottom: "1.25rem" }}>
          Founding board members are currently being recruited from national leadership in education
          practice, student data privacy, outcomes-based finance, state policy, and legal and
          contracting structure.
        </p>
        <p style={bodyStyle}>
          EDVAULT is organized by{" "}
          <strong style={{ color: "#1e2d4a" }}>Dr. Rob Wessman, Ed.L.D., Harvard University.</strong>{" "}
          His career spans the full arc of the problem EDVAULT solves: classroom teacher, turnaround
          school leader, education data strategist, nonprofit founder, and senior leader at a
          national AI education company. For two decades, across every seat at the table, he has
          sought outcomes-based accountability. EDVAULT makes it possible.
        </p>
      </section>

      <Divider />

      {/* Founding Board + Advisory Council */}
      <section style={{ backgroundColor: "#f8f7f5" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <Label>Founding Board</Label>
            <p style={{ ...bodyStyle, marginBottom: "1.25rem" }}>
              EDVAULT's founding board is being assembled from national leadership across the
              disciplines this work requires. Board members bring expertise in education leadership
              and district practice, student data privacy, outcomes-based finance, policy and state
              legislative strategy, and legal and contracting structure.
            </p>
            <p style={{ fontFamily: "Georgia, serif", color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic" }}>
              Announcements forthcoming.
            </p>
          </div>
          <div>
            <Label>Advisory Council</Label>
            <p style={bodyStyle}>
              Every organization that engages EDVAULT's services holds a seat on our Advisory
              Council. This structure ensures that the districts and providers we serve have a formal
              voice in how EDVAULT operates, without compromising the independence of our governing
              board. The Advisory Council is balanced by design, and meets twice annually.
            </p>
          </div>
        </div>
      </section>

      {/* A Note on Where We Are */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Label>A Note on Where We Are</Label>
        <p style={{ ...bodyStyle, marginBottom: "1.25rem" }}>
          EDVAULT is in its founding stage. The governance structure is being finalized, the board
          is being recruited, and the infrastructure is being built.
        </p>
        <p style={{ ...bodyStyle, marginBottom: "1.25rem" }}>
          We are sharing this concept now because the organizations and individuals who will shape
          EDVAULT most need to be part of the conversation from the beginning, not handed a finished
          product and asked to endorse it.
        </p>
        <p style={{ fontFamily: "Georgia, serif", color: "#1e2d4a", fontSize: "1.05rem", lineHeight: "1.85", fontWeight: "bold" }}>
          If you are a district leader, a provider organization, a funder, or a practitioner who is
          interested in outcomes-based contracts, we want to hear from you.
        </p>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1e2d4a" }} className="px-6 py-20 text-center">
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: "#ffffff",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            marginBottom: "2rem",
          }}
        >
          If this concept resonates, we would welcome a conversation.
        </h2>
        <button
          onClick={() => setModalOpen(true)}
          style={{
            backgroundColor: "#8b1a2e",
            color: "#ffffff",
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            letterSpacing: "0.06em",
            padding: "0.85rem 2rem",
            border: "none",
            cursor: "pointer",
          }}
          className="hover:opacity-90 transition-opacity"
        >
          Request a Conversation
        </button>
      </section>

      <SignUpModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "Georgia, serif",
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        color: "#8b1a2e",
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px solid #d1d5db", maxWidth: "48rem", margin: "0 auto" }} />;
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  color: "#374151",
  fontSize: "1.05rem",
  lineHeight: "1.85",
};
