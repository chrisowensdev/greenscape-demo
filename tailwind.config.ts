import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: "hsl(var(--bg))",
				fg: "hsl(var(--fg))",
				muted: "hsl(var(--muted))",
				border: "hsl(var(--border))",
				primary: "hsl(var(--primary))",
				primaryContrast: "hsl(var(--primary-contrast))",
				accent: "hsl(var(--accent))",
				ring: "hsl(var(--ring))",
			},
			borderRadius: {
				xl2: "1.25rem",
			},
			boxShadow: {
				soft: "0 8px 24px rgba(16, 50, 36, 0.08)",
			},
		},
	},
	plugins: [],
} satisfies Config;
