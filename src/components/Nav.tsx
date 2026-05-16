"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SignUpModal from "./SignUpModal";

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav
        style={{ borderBottom: "1px solid #d1d5db" }}
        className="bg-white sticky top-0 z-40"
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center no-underline">
            <Image
              src="/images/edvault_logo.png"
              alt="EDVAULT"
              width={120}
              height={60}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              style={{ color: "#374151", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}
              className="hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{ color: "#374151", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}
              className="hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                backgroundColor: "#1e2d4a",
                color: "#ffffff",
                fontFamily: "Georgia, serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                padding: "0.5rem 1.25rem",
                border: "none",
                cursor: "pointer",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Stay Informed
            </button>
          </div>
        </div>
      </nav>
      <SignUpModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
