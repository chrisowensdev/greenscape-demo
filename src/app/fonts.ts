import { Lora, Nunito } from "next/font/google";

export const lora = Lora({
	subsets: ["latin"],
	variable: "--font-heading",
	weight: ["400", "600", "700"],
	display: "swap",
});

export const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-body",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});
