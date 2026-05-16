"use client";
import { useState } from "react";
import SignUpModal from "@/components/SignUpModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: "#1e2d4a", color: "#ffffff" }}
        className="px-6 py-28 text-center"
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            color: "#9ca3af",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          A nonprofit organization
        </p>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: "1.2",
            maxWidth: "700px",
            margin: "0 auto 1.5rem",
          }}
        >
          The authority that makes outcomes-based contracts work.
        </h1>
        <div style={{ width: "3rem", height: "2px", backgroundColor: "#8b1a2e", margin: "0 auto 2rem" }} />
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.15rem",
            color: "#d1d5db",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: "1.8",
            fontStyle: "italic",
          }}
        >
          EDVAULT sits between districts and providers as a trusted, neutral third party,
          holding data, holding funds, and holding the line on student outcomes.
        </p>
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

      {/* The Problem */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionLabel>The Problem</SectionLabel>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: "#1e2d4a",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            lineHeight: "1.3",
            marginBottom: "1.5rem",
            maxWidth: "680px",
          }}
        >
          Every stakeholder in education wants the same thing: student outcomes.
          The system fails all of them.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { who: "Districts", what: "Spend billions on services without knowing their impact." },
            { who: "Providers", what: "Don't have a way to monitor impact of their services." },
            { who: "Families", what: "Have no way to know if interventions are making any difference." },
          ].map(({ who, what }) => (
            <div key={who} style={{ borderTop: "3px solid #8b1a2e", paddingTop: "1.25rem" }}>
              <h3 style={{ fontFamily: "Georgia, serif", color: "#1e2d4a", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                {who}
              </h3>
              <p style={{ fontFamily: "Georgia, serif", color: "#374151", fontSize: "0.95rem", lineHeight: "1.7" }}>
                {what}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #d1d5db", maxWidth: "64rem", margin: "0 auto" }} />

      {/* The Solution */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionLabel>The Solution</SectionLabel>
        <p
          style={{
            fontFamily: "Georgia, serif",
            color: "#374151",
            fontSize: "1.05rem",
            lineHeight: "1.85",
            maxWidth: "680px",
            marginBottom: "2rem",
          }}
        >
          Outcomes-based contracting addresses student outcomes by attaching a meaningful part of
          the contract (usually 30–40%) to student outcomes. It also defines the district's
          responsibility from the outset. Districts are better stewards of resources, and providers
          are able to prove impact.
        </p>
        <blockquote
          style={{
            borderLeft: "4px solid #8b1a2e",
            paddingLeft: "1.5rem",
            margin: 0,
            maxWidth: "640px",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#1e2d4a",
              fontSize: "1.1rem",
              lineHeight: "1.85",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            But this requires something that does not yet exist: a trusted, neutral third party with
            the data infrastructure, financial mechanisms, and authority to make it work at scale.
          </p>
        </blockquote>
      </section>

      <div style={{ borderTop: "1px solid #d1d5db", maxWidth: "64rem", margin: "0 auto" }} />

      {/* What EDVAULT Does */}
      <section style={{ backgroundColor: "#f8f7f5" }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>What EDVAULT Does</SectionLabel>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              color: "#1e2d4a",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "3rem",
            }}
          >
            Three things no one else does together.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Hub",
                body: "We hold both student outcome data from the district and implementation data from the provider. Providers never touch raw student data. We measure, verify, and report outcomes against contract benchmarks under rigorous privacy and security standards.",
              },
              {
                title: "Escrow Provider",
                body: "We hold contingent contract payments until outcomes are verified. Funds are released or returned based on evidence, not negotiation, removing financial risk for both sides.",
              },
              {
                title: "Arbiter of Record",
                body: "EDVAULT adjudicates when disputes arise. We ensure initial agreements are clear, hold the data and the contract, audit and arbitrate disputes, and our authority is binding.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #d1d5db",
                  padding: "2rem",
                }}
              >
                <div style={{ width: "2rem", height: "3px", backgroundColor: "#8b1a2e", marginBottom: "1.25rem" }} />
                <h3 style={{ fontFamily: "Georgia, serif", color: "#1e2d4a", fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "Georgia, serif", color: "#374151", fontSize: "0.9rem", lineHeight: "1.75" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FERPA Advantage */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>The FERPA Advantage</SectionLabel>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                color: "#1e2d4a",
                fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                lineHeight: "1.35",
                marginBottom: "1.25rem",
              }}
            >
              Unlocking contracts that were previously legally and politically impossible.
            </h2>
            <p style={{ fontFamily: "Georgia, serif", color: "#374151", fontSize: "0.95rem", lineHeight: "1.8" }}>
              Districts and states are often prohibited, or politically reluctant, to share student
              data with vendors. EDVAULT becomes the FERPA firewall. Districts share data with us.
              Providers receive only verified outcome reports.
            </p>
          </div>
          <div style={{ backgroundColor: "#1e2d4a", color: "#ffffff", padding: "2.5rem" }}>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.05rem",
                lineHeight: "1.85",
                fontStyle: "italic",
                color: "#d1d5db",
              }}
            >
              "EDVAULT's value rests entirely on neutrality. No investor return expectations
              influence our decisions. Our governing board is independent. Our rulings are final
              precisely because we serve no commercial interest."
            </p>
            <div style={{ width: "2rem", height: "2px", backgroundColor: "#8b1a2e", marginTop: "1.5rem" }} />
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section style={{ backgroundColor: "#f8f7f5" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Why Now</SectionLabel>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              color: "#1e2d4a",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "1.5rem",
            }}
          >
            The moment has arrived. The infrastructure has not. Until now.
          </h2>
          <p style={{ fontFamily: "Georgia, serif", color: "#374151", fontSize: "1rem", lineHeight: "1.85" }}>
            Outcomes-based contracting is gaining momentum nationally. Federal and state
            accountability pressure for edtech and professional services providers is increasing.
            The neutral infrastructure to make accountability work at scale does not yet exist.
            EDVAULT fills that gap.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1e2d4a" }} className="px-6 py-20 text-center">
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: "#ffffff",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            marginBottom: "1rem",
          }}
        >
          EDVAULT is in formation.
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            color: "#9ca3af",
            fontSize: "1rem",
            maxWidth: "480px",
            margin: "0 auto 2rem",
            lineHeight: "1.7",
            fontStyle: "italic",
          }}
        >
          We are seeking a small group of founding board members, advisors, and early funders
          to shape structure and market entry.
        </p>
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
          If this concept resonates, let's talk.
        </button>
      </section>

      <SignUpModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
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
