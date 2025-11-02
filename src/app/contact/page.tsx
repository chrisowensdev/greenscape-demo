"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// --------------------------------------------------------------
//  Contact page – mobile‑first & static‑export friendly
// --------------------------------------------------------------

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<main className="flex flex-col bg-white text-neutral-800">
			{/* ───────────────────── Hero ───────────────────── */}
			<section className="relative isolate grid place-items-center h-[50vh] sm:h-[60vh] overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<Image
						src="/images/contact/contact-hero.webp"
						alt="Contact GreenScape"
						fill
						priority
						unoptimized
						className="object-cover object-center"
					/>
					<div className="absolute inset-0 bg-green-900/70" />
				</div>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-white text-center px-4 text-3xl sm:text-4xl md:text-5xl font-bold"
				>
					Get in Touch
				</motion.h1>
			</section>

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
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
							Send a Message
						</h2>
						{submitted ? (
							<p className="p-6 bg-green-100 rounded-2xl shadow text-green-800">
								Thank you! We’ll be in touch within one business
								day.
							</p>
						) : (
							<form
								action="https://formspree.io/f/yourFormId" // 🔄 replace with real Formspree ID
								method="POST"
								onSubmit={() => setSubmitted(true)}
								className="grid gap-4"
							>
								<input
									type="text"
									name="name"
									required
									placeholder="Full Name"
									className="border border-neutral-300 rounded-lg p-3 w-full"
								/>
								<input
									type="email"
									name="email"
									required
									placeholder="Email Address"
									className="border border-neutral-300 rounded-lg p-3 w-full"
								/>
								<textarea
									name="message"
									required
									rows={6}
									placeholder="How can we help you?"
									className="border border-neutral-300 rounded-lg p-3 resize-none w-full"
								/>

								<Button
									type="submit"
									variant="outline"
									size="lg"
									className="min-w-50 border-white bg-green-700 text-white rounded-2xl hover:bg-white hover:text-green-700 hover:border-green-700 w-full"
								>
									Send Message
								</Button>
							</form>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
