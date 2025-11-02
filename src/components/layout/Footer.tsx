import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-neutral-900 text-neutral-300 py-10">
			<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
				<div>
					<h3 className="font-semibold text-white mb-3">
						GreenScape Landscaping
					</h3>
					<p>
						1234 Garden Lane
						<br />
						Greenville, NY 12083
					</p>
					<p className="mt-2">Mon‑Fri: 8 am – 6 pm</p>
				</div>

				<div>
					<h3 className="font-semibold text-white mb-3">Contact</h3>
					<p>
						Phone:{" "}
						<a href="tel:+15551234567" className="hover:underline">
							(555) 123‑4567
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:hello@greenscape.com"
							className="hover:underline"
						>
							hello@greenscape.com
						</a>
					</p>
				</div>

				<nav>
					<h3 className="font-semibold text-white mb-3">Links</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#services" className="hover:underline">
								Services
							</Link>
						</li>
						<li>
							<Link href="#about" className="hover:underline">
								About
							</Link>
						</li>
						<li>
							<Link href="#gallery" className="hover:underline">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="#quote" className="hover:underline">
								Free Quote
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<p className="text-center text-sm mt-8">
				&copy; {new Date().getFullYear()} GreenScape Landscaping. All
				rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
