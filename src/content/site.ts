import type { SiteInfo } from "@/types/content";

export const site: SiteInfo = {
	brand: "Greenscape Lawn & Landscape",
	tagline: "Beautiful yards. Professional care.",
	description:
		"Full-service landscaping, lawn care, and irrigation for Richmond, VA and surrounding areas.",
	phone: "(804) 555-0134",
	email: "hello@greenscapeland.com",
	address: {
		line1: "1201 Lakeside Ave",
		city: "Richmond",
		state: "VA",
		zip: "23228",
	},
	hours: [
		{ days: "Mon–Fri", open: "08:00", close: "18:00" },
		{ days: "Sat", open: "09:00", close: "14:00" },
	],
	social: {
		facebook: "https://facebook.com/greenscape",
		instagram: "https://instagram.com/greenscape",
	},
	hero: {
		headline: "From patchy to pristine",
		subheadline:
			"Landscaping, lawn care, and irrigation done right—on time and on budget.",
		ctaLabel: "Get a Free Quote",
		ctaHref: "/contact",
		image: "/images/hero-bg.jpg",
	},
};
