import React, { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;
const logo = `${BASE}images/logo/logo.png`;
const logoKo = `${BASE}images/logo/logo-korean.png`;

interface NavbarProps {
  onNavigate: (view: "home" | "company" | "ceo" | "projects" | "news") => void;
  currentView: "home" | "company" | "ceo" | "projects" | "news";
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 화면이 커지면 모바일 메뉴 자동 닫기
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 메뉴 열려있을 때 스크롤 잠금(선택)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (
    view: "home" | "company" | "ceo" | "projects" | "news",
    e?: React.MouseEvent
  ) => {
    if (e) e.preventDefault();
    onNavigate(view);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] pointer-events-auto isolate transition-all duration-300 ${scrolled || currentView !== "home"
        ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Brand */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <img
              src={isLogoHovered ? logoKo : logo}
              alt="(주)서울건축환경기술사사무소"
              className="h-12 w-auto object-contain transition-all duration-300"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNav("company")}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === "company"
                ? "text-blue-600 bg-blue-50"
                : "text-slate-900 hover:bg-slate-50"
                }`}
            >
              회사소개
            </button>
            <button
              onClick={() => handleNav("ceo")}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === "ceo"
                ? "text-blue-600 bg-blue-50"
                : "text-slate-900 hover:bg-slate-50"
                }`}
            >
              CEO 인사말
            </button>
            <button
              onClick={() => handleNav("projects")}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === "projects"
                ? "text-blue-600 bg-blue-50"
                : "text-slate-900 hover:bg-slate-50"
                }`}
            >
              수행실적
            </button>
            <button
              onClick={() => handleNav("news")}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === "news"
                ? "text-blue-600 bg-blue-50"
                : "text-slate-900 hover:bg-slate-50"
                }`}
            >
              정보·뉴스
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="p-2 md:hidden text-slate-900 relative z-[10000]"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Panel (Overlay) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[9998]">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-20 left-0 right-0 px-4">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl overflow-hidden">
              <button
                onClick={() => handleNav("company")}
                className="w-full text-left px-5 py-4 font-bold text-slate-900 hover:bg-slate-50"
              >
                회사소개
              </button>
              <button
                onClick={() => handleNav("ceo")}
                className="w-full text-left px-5 py-4 font-bold text-slate-900 hover:bg-slate-50"
              >
                CEO 인사말
              </button>
              <button
                onClick={() => handleNav("projects")}
                className="w-full text-left px-5 py-4 font-bold text-slate-900 hover:bg-slate-50"
              >
                수행실적
              </button>
              <button
                onClick={() => handleNav("news")}
                className="w-full text-left px-5 py-4 font-bold text-slate-900 hover:bg-slate-50"
              >
                정보·뉴스
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;