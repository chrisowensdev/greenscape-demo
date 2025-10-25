import type { Service } from "@/types/content";

export const services: Service[] = [
	{
		slug: "lawn-care",
		name: "Lawn Care",
		summary:
			"Weekly mowing, edging, fertilization, weed control, and aeration.",
		description:
			"Keep your lawn healthy and vibrant with routine care plans. We tailor schedules to your yard and seasonal needs.",
		icon: "sprout",
		heroImage: "/images/services/lawn-care-hero.jpg",
		features: [
			"Weekly or biweekly mowing",
			"Edging & blowing",
			"Fertilization & weed control",
			"Aeration & overseeding",
		],
		startingPrice: "$49/visit",
		ctaLabel: "Get Lawn Care Quote",
		ctaHref: "/contact?service=lawn-care",
		gallery: [
			"/images/services/lawn-care-1.jpg",
			"/images/services/lawn-care-2.jpg",
		],
		faqs: [
			{
				q: "How often should I mow?",
				a: "Most lawns thrive on weekly mowing during peak season.",
			},
			{
				q: "Do you offer seasonal plans?",
				a: "Yes—spring, summer, and fall packages are available.",
			},
		],
		seo: {
			title: "Lawn Care in Richmond, VA | Greenscape",
			description:
				"Professional mowing, fertilization, and weed control services.",
		},
	},
	{
		slug: "landscape-design",
		name: "Landscape Design",
		summary:
			"Custom designs, plant selection, hardscapes, and installation.",
		description:
			"From concept to completion, our designers craft outdoor spaces that look great and function beautifully.",
		icon: "leaf",
		heroImage: "/images/services/landscape-design-hero.jpg",
		features: [
			"3D design mockups",
			"Planting plans",
			"Mulch, beds, borders",
			"Patios & walkways",
		],
		startingPrice: "Custom",
		ctaLabel: "Start a Design",
		ctaHref: "/contact?service=landscape-design",
	},
	{
		slug: "irrigation",
		name: "Irrigation",
		summary:
			"Smart irrigation installation, repair, winterization, and startup.",
		description:
			"Efficient watering systems that protect your investment while conserving water.",
		icon: "droplet",
		heroImage: "/images/services/irrigation-hero.jpg",
		features: [
			"Design & install",
			"Smart controllers",
			"Repairs",
			"Winterization",
		],
		ctaLabel: "Irrigation Quote",
		ctaHref: "/contact?service=irrigation",
	},
];

export const featuredServiceSlugs = ["lawn-care", "landscape-design"];
