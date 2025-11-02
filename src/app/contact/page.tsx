import ContactForm from "@/components/forms/ContactForm";
import Hero from "@/components/layout/Hero";

export const metadata = {
	title: "Contact | Greenscape Landscaping",
	description:
		"Lawn care, landscape design, and irrigation services for Richmond, VA. Explore our offerings and request a free quote.",
};

export default function ContactPage() {
	return (
		<main className="flex flex-col bg-white text-neutral-800">
			{/* ───────────────────── Hero ───────────────────── */}
			<Hero
				imageSrc="/images/contact/contact-hero.webp"
				title="Get in Touch"
			/>

			{/* ───────────────── Contact Info & Form ─────────── */}
			<section className="py-12 sm:py-16">
				<div className="max-w-6xl mx-auto grid gap-12 px-4 sm:px-6 md:grid-cols-2 items-start">
					{/* Info block */}
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
							Contact Details
						</h2>
						<p className="mb-2">
							<strong>Address:</strong> 1234 Garden Lane,
							Greenville, NY 12083
						</p>
						<p className="mb-2">
							<strong>Phone:</strong>{" "}
							<a href="tel:+15551234567" className="underline">
								(555) 123‑4567
							</a>
						</p>
						<p className="mb-6">
							<strong>Email:</strong>{" "}
							<a
								href="mailto:hello@greenscape.com"
								className="underline"
							>
								hello@greenscape.com
							</a>
						</p>
						<div
							className="relative w-full overflow-hidden rounded-2xl shadow-lg"
							style={{ aspectRatio: "16 / 9" }}
						>
							{/* <Image
								src="/images/map.jpg"
								alt="Map to GreenScape"
								width={600}
								height={400}
								unoptimized
								className="object-cover w-full h-auto"
							/> */}
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32119.073058600443!2d-77.57944541091031!3d37.6093565029849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1153aa261658d%3A0xf4a12254c540be07!2s8401%20Mayland%20Dr%2C%20Richmond%2C%20VA%2023294!5e0!3m2!1sen!2sus!4v1762103004789!5m2!1sen!2sus"
								className="absolute inset-0 h-full w-full block"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
							></iframe>
						</div>
					</div>

					{/* Form block */}
					<ContactForm />
				</div>
			</section>
		</main>
	);
}
