export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1e2d4a", color: "#ffffff" }} className="mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.3rem",
              fontWeight: "bold",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            EDVAULT
          </p>
          <p style={{ color: "#9ca3af", fontSize: "0.875rem", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            The authority that makes outcomes-based contracts work.
          </p>
        </div>
        <div style={{ fontSize: "0.875rem", fontFamily: "Georgia, serif", color: "#d1d5db" }}>
          <a
            href="mailto:team@edvault.org"
            style={{ color: "#d1d5db" }}
            className="hover:opacity-70 transition-opacity"
          >
            team@edvault.org
          </a>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #2d4270" }} className="max-w-5xl mx-auto px-6 py-4">
        <p style={{ color: "#6b7280", fontSize: "0.8rem", fontFamily: "Georgia, serif" }}>
          © {new Date().getFullYear()} EDVAULT. A nonprofit organization.
        </p>
      </div>
    </footer>
  );
}
