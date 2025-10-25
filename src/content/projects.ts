import type { Project } from "@/types/content";

export const projects: Project[] = [
	{
		slug: "glen-allen-front-yard-refresh",
		title: "Front Yard Refresh in Glen Allen",
		excerpt: "New sod, bed edging, mulch, and seasonal color.",
		category: "Residential",
		location: "Glen Allen, VA",
		coverImage: "/images/projects/front-yard-1/cover.jpg",
		images: [
			"/images/projects/front-yard-1/1.jpg",
			"/images/projects/front-yard-1/2.jpg",
			"/images/projects/front-yard-1/3.jpg",
		],
		servicesUsed: ["lawn-care", "landscape-design"],
		date: "2025-07-10",
		beforeAfter: [
			{
				before: "/images/projects/front-yard-1/before.jpg",
				after: "/images/projects/front-yard-1/after.jpg",
			},
		],
	},
	{
		slug: "short-pump-patio-install",
		title: "Patio + Planting in Short Pump",
		excerpt:
			"Paver patio with border, native plantings, and low-voltage lighting.",
		category: "Residential",
		location: "Short Pump, VA",
		coverImage: "/images/projects/patio-1/cover.jpg",
		images: [
			"/images/projects/patio-1/1.jpg",
			"/images/projects/patio-1/2.jpg",
		],
		servicesUsed: ["landscape-design"],
	},
];
