"use client";

export default function LocalBusinessJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Greenscape Landscaping",
		image: "https://greenscape.com/images/og-hero.jpg",
		url: "https://greenscape.elevatedevworks.com",
		telephone: "+1-804-555-0134",
		address: {
			"@type": "PostalAddress",
			streetAddress: "1234 Main St",
			addressLocality: "Richmond",
			addressRegion: "VA",
			postalCode: "23220",
			addressCountry: "US",
		},
		priceRange: "$$",
		description:
			"Greenscape Landscaping offers professional lawn care, irrigation, and outdoor design services throughout Richmond VA.",
		sameAs: [
			"https://www.facebook.com/greenscaperva",
			"https://www.instagram.com/greenscaperva",
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
