import type { NavItem } from "@/types/content";

export const headerNav: NavItem[] = [
	{ label: "Home", href: "/" },
	{
		label: "Services",
		href: "/services",
		children: [
			{ label: "Lawn Care", href: "/services/lawn-care" },
			{ label: "Landscape Design", href: "/services/landscape-design" },
			{ label: "Irrigation", href: "/services/irrigation" },
		],
	},
	{ label: "Gallery", href: "/gallery" },
	{ label: "Testimonials", href: "/testimonials" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms", href: "/terms" },
	{ label: "Service Areas", href: "/service-areas" },
];
