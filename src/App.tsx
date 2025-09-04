"use client"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  // Simple language switcher
  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  // Set direction based on language
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  // Ensure <html> tag direction is updated
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-red-50 overflow-hidden relative flex flex-col"
    >
      <header className="relative z-10 border-b border-slate-200 bg-white/70 backdrop-blur-sm">
        <div
          className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
          dir="ltr"
        >
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white/70 border border-slate-200 rounded-full px-2 py-1 shadow-sm backdrop-blur-sm">
            {[
              { lng: "en", label: "EN", flag: "🇬🇧" },
              { lng: "es", label: "ES", flag: "🇪🇸" },
              { lng: "ar", label: "AR", flag: "🇸🇦" },
            ].map(({ lng, label, flag }) => (
              <button
                key={lng}
                onClick={() => changeLang(lng)}
                className={
                  "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-400 " +
                  (i18n.language === lng
                    ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow font-bold"
                    : "text-slate-700 hover:bg-slate-100")
                }
                aria-current={i18n.language === lng ? "true" : undefined}
              >
                <span className="text-base">{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="text-right">
            <a
              href="mailto:info@x6drinks.com"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-all duration-300 text-sm font-semibold bg-white/50 px-4 py-2 rounded-full border border-slate-200/50 hover:border-blue-200 hover:bg-blue-50/50 backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@x6drinks.com
            </a>
          </div>
        </div>
      </header>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/40 via-white/20 to-red-100/40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Product Images as Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24TrayX6_CLASSIC_0006-q8nceIh8ULSwX2rVN8a37mdIFVvcOn.png"
          alt=""
          className="absolute top-10 right-10 w-64 rotate-12 opacity-40"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24TrayX6_CLASSIC_0003-2CbwrmSY6DwYl17kSVw1mJF6FX1yHQ.png"
          alt=""
          className="absolute bottom-10 left-10 w-48 -rotate-12 opacity-30"
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center justify-center min-h-[80vh]">
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left space-y-12 pt-8">
            <div className="space-y-6">
              <div>
                {/* Coming Soon Badge */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg animate-pulse">
                    {t("comingSoon")}
                  </span>
                </div>
                <div
                  className={
                    "text-8xl md:text-9xl font-black tracking-tighter relative " +
                    (i18n.language === "ar" ? "text-right" : "text-left")
                  }
                >
                  <span
                    className="relative inline-block"
                    style={{
                      color: "#1728A2",
                      textShadow: `
                        -2px -2px 0 white,
                        2px -2px 0 white,
                        -2px 2px 0 white,
                        2px 2px 0 white,
                        -2px 0 0 white,
                        2px 0 0 white,
                        0 -2px 0 white,
                        0 2px 0 white,
                        0 0 20px rgba(23, 40, 162, 0.3)
                      `,
                    }}
                  >
                    X6
                  </span>
                </div>
                <div
                  className={
                    "text-2xl md:text-3xl font-bold text-slate-700 tracking-widest uppercase -mt-4 " +
                    (i18n.language === "ar" ? "text-right" : "text-left")
                  }
                >
                  {t("energyDrink")}
                </div>
              </div>

              <div
                className={
                  "space-y-4 " +
                  (i18n.language === "ar" ? "text-right" : "text-left")
                }
              >
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 text-balance leading-tight">
                  {t("getReadyFor")}
                  <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    {t("pureEnergy")}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 text-pretty max-w-lg">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Product Showcase */}
          <div className="flex justify-center lg:justify-end relative pt-8">
            <div className="relative">
              <div className="relative z-20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Can_X6_CLASSIC_0001%20Background%20Removed-jjTWNxqRM6O72INs62MTQQz2VveFsp.png"
                  alt="X6 Energy Drink"
                  className="w-64 md:w-80 lg:w-96 h-auto transform hover:scale-105 transition-all duration-500 ease-out"
                  style={{
                    filter:
                      "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2)) drop-shadow(0 10px 20px rgba(23, 40, 162, 0.2))",
                  }}
                />
              </div>

              {/* Glowing Effects */}
              <div className="absolute inset-0 z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
              </div>

              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-red-400 rounded-full opacity-20 animate-bounce delay-500"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-red-400 to-blue-400 rounded-full opacity-25 animate-bounce delay-1000"></div>
              <div className="absolute top-1/4 -left-6 w-8 h-8 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-700"></div>
              <div className="absolute bottom-1/4 -right-6 w-14 h-14 bg-red-400/25 rounded-full blur-md animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
