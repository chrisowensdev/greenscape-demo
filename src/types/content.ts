export type Slug = string;

export interface SiteInfo {
	brand: string;
	tagline: string;
	description: string;
	phone: string;
	email: string;
	address: {
		line1: string;
		city: string;
		state: string;
		zip: string;
	};
	hours: { days: string; open: string; close: string }[];
	social: Partial<
		Record<"facebook" | "instagram" | "x" | "youtube" | "tiktok", string>
	>;
	hero: {
		headline: string;
		subheadline: string;
		ctaLabel: string;
		ctaHref: string;
		image: string; // /images/hero-bg.jpg
	};
}

export interface NavItem {
	label: string;
	href: string;
	children?: NavItem[];
}

export interface Service {
	slug: Slug; // 'lawn-care'
	name: string; // 'Lawn Care'
	summary: string;
	description: string; // long HTML-safe string or plain text
	icon?: string; // lucide-react name or image path
	heroImage?: string;
	features?: string[];
	startingPrice?: string;
	ctaLabel?: string;
	ctaHref?: string;
	gallery?: string[]; // image paths
	faqs?: FAQ[];
	seo?: {
		title?: string;
		description?: string;
	};
}

export interface Project {
	slug: Slug;
	title: string;
	excerpt: string;
	category: "Residential" | "Commercial" | "Design";
	location?: string; // 'Glen Allen, VA'
	coverImage: string;
	images: string[];
	servicesUsed: Slug[]; // link to Service slugs
	date?: string; // '2025-08-01'
	beforeAfter?: { before: string; after: string }[];
}

export interface Testimonial {
	id: string;
	name: string;
	location?: string;
	rating: 1 | 2 | 3 | 4 | 5;
	quote: string;
	source?: "Google" | "Yelp" | "Facebook" | "Direct";
}

export interface FAQ {
	q: string;
	a: string;
}

export interface ServiceArea {
	city: string;
	zips?: string[];
}

export interface Promo {
	slug: Slug;
	title: string;
	details: string;
	validThrough?: string; // ISO date
	badge?: string; // 'Fall Special'
	ctaLabel?: string;
	ctaHref?: string;
}
