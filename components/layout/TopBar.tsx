"use client";

export function TopBar() {
  return (
    <div
      className="w-full py-2 px-4 text-center text-xs font-semibold z-50 relative"
      style={{ background: "#e63946", color: "#fff", letterSpacing: "0.03em" }}
    >
      <span className="font-black">18+</span>
      {" · "}
      Gamble responsibly
      {" · "}
      Need support?{" "}
      <a
        href="https://www.begambleaware.org"
        target="_blank"
        rel="noopener noreferrer"
        className="font-black underline hover:no-underline"
        style={{ color: "#fff" }}
      >
        BeGambleAware.org
      </a>
      {" · "}
      <a href="tel:08088020133" className="font-black underline hover:no-underline" style={{ color: "#fff" }}>
        0808 8020 133
      </a>
    </div>
  );
}
