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
						src="/images/contact-hero.jpg"
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
						<div className="w-full overflow-hidden rounded-2xl shadow-lg">
							<Image
								src="/images/map.jpg"
								alt="Map to GreenScape"
								width={600}
								height={400}
								unoptimized
								className="object-cover w-full h-auto"
							/>
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
									size="lg"
									className="rounded-2xl w-full sm:w-fit justify-center"
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
