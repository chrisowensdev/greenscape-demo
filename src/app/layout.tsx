import { lora, nunito } from "./fonts";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import LocalBusinessJsonLd from "@/components/seo/LocalBusiessJsonLd";
import Footer from "@/components/layout/Footer";

export const metadata = {
	metadataBase: new URL("https://greenscape.elevatedevworks.com"), // set your domain
	title: {
		default: "Greenscape | Lawn Care & Landscape Design in Richmond VA",
		template: "%s | Greenscape Landscaping",
	},
	description:
		"Professional lawn care, irrigation, and landscape design across Richmond VA. Trusted, insured, locally owned.",
	openGraph: {
		type: "website",
		siteName: "Greenscape Landscaping",
		url: "https://greenscape.elevatedevworks.com",
		title: "Greenscape Landscaping | Richmond VA",
		description:
			"Transform your outdoor space with expert lawn care, irrigation, and design.",
		images: ["/images/greenscape-og-card.png"], // resolved against metadataBase
	},
	twitter: {
		card: "summary_large_image",
		title: "Greenscape Landscaping | Richmond VA",
		description: "Landscaping, lawn care, and irrigation done right.",
		images: [
			"https://greenscape.elevatedevworks.com/images/greenscape-og-card.png",
		],
	},
	robots: { index: true, follow: true },
	icons: {
		icon: "/greenscape-logo.png",
		apple: "/greenscape-logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
			</head>
			<body
				className={`theme-greenscape ${lora.variable} ${nunito.variable} bg-bg text-fg`}
				style={{
					fontFamily: "var(--font-body)",
				}}
			>
				<LocalBusinessJsonLd />
				<Navbar />
				<main className="pt-10">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
