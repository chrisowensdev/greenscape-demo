/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://greenscape.elevatedevworks.com",
	generateRobotsTxt: true, //
	outDir: "out",
	changefreq: "weekly",
	priority: 0.7,
	sitemapSize: 7000,
	exclude: ["/api/*", "/404", "/500"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallowallow: "/",
			},
		],
	},

	// Optional: tweak priorities per route
	transform: async (config, path) => {
		const prioMap = {
			"/": 1.0,
			"/services": 0.9,
			"/work": 0.8,
			"/about": 0.8,
			"/contact": 0.8,
		};
		return {
			loc: path,
			changefreq: "weekly",
			priority: prioMap[path] ?? 0.7,
			lastmod: new Date().toISOString(),
		};
	},
};
