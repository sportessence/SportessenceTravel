import React from "react";

interface LogoTravelProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function LogoTravel({
  variant = "light",
  className = "",
  size = "md",
}: LogoTravelProps) {
  // Dimensioni proporzionate
  const dimensions = {
    sm: { height: 42, width: 230 },
    md: { height: 52, width: 285 },
    lg: { height: 68, width: 370 },
  }[size];

  const textColor = variant === "light" ? "#FFFFFF" : "#072F56";
  const badgeRing = variant === "light" ? "#FFFFFF" : "#0097B2";
  const subtitleColor = variant === "light" ? "#E65E1B" : "#E65E1B";
  const subtextColor = variant === "light" ? "#E0F2FE" : "#0097B2";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 60"
        width={dimensions.width}
        height={dimensions.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-10 sm:h-12 md:h-14 max-w-full"
      >
        {/* BADGE CIRCOLARE CON 'SE' */}
        <g transform="translate(4, 2)">
          {/* Cerchio esterno azzurro/cyan */}
          <circle cx="28" cy="28" r="26" fill="#0097B2" />
          
          {/* Anello decorativo interno bianco */}
          <circle
            cx="28"
            cy="28"
            r="23"
            stroke={badgeRing}
            strokeWidth="2"
            fill="none"
            opacity="0.9"
          />

          {/* Dettaglio dinamico arancione (Fox) */}
          <path
            d="M 28 5 A 23 23 0 0 1 51 28"
            stroke="#E65E1B"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lettere S ed E stilizzate al centro */}
          {/* Lettera S */}
          <path
            d="M 22 17 C 26 17, 27 19, 27 21 C 27 24, 20 25, 20 29 C 20 33, 23 35, 27 35"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Lettera E sovrapposta/intrecciata */}
          <path
            d="M 32 17 L 32 35 M 32 17 L 40 17 M 32 26 L 38 26 M 32 35 L 40 35"
            stroke="#E65E1B"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* TESTO SPORTESSENCE */}
        <text
          x="68"
          y="31"
          fill={textColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="24"
          letterSpacing="0.08em"
        >
          SPORTESSENCE
        </text>

        {/* SOTTOTITOLO UNIFICATO: "TRAVEL • Tornei Lago di Como" */}
        <g transform="translate(69, 48)">
          {/* Parola TRAVEL in Arancione Fox con forte risalto */}
          <text
            x="0"
            y="0"
            fill={subtitleColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="11"
            letterSpacing="0.22em"
          >
            TRAVEL
          </text>

          {/* Pallino separatore */}
          <circle cx="68" cy="-3.5" r="2" fill="#E65E1B" />

          {/* Dicitura "Tornei Lago di Como" */}
          <text
            x="76"
            y="0"
            fill={subtextColor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="10"
            letterSpacing="0.05em"
          >
            Tornei Lago di Como
          </text>
        </g>
      </svg>
    </div>
  );
}
