// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

const config = {
	plugins: {
		// ⬅️ v4 uses this package (not "tailwindcss" directly)
		"@tailwindcss/postcss": {},
		autoprefixer: {},
	},
};

export default config;
