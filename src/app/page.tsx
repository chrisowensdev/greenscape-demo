"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Sun, Droplets, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
	const services = [
		{
			title: "Lawn Care",
			icon: Leaf,
			desc: "Weekly mowing, edging & fertilization for a lush, healthy lawn.",
		},
		{
			title: "Garden Design",
			icon: Sun,
			desc: "Custom perennial & shrub layouts that bloom year‑round.",
		},
		{
			title: "Seasonal Cleanup",
			icon: Droplets,
			desc: "Spring & fall leaf removal, pruning and mulching.",
		},
	];

	return (
		<main className="flex flex-col bg-white text-neutral-800">
			<Navbar />
			{/* ───────────────────── Hero ───────────────────── */}
			<section className="relative isolate grid place-items-center h-[80vh] overflow-hidden">
				{/* Background image + color overlay pulled out of document flow */}
				<div className="absolute inset-0 -z-10">
					<Image
						src="/images/hero-landscaping.jpg"
						alt="Beautiful landscaped yard"
						fill
						priority
						unoptimized
						className="object-cover object-center"
					/>
					<div className="absolute inset-0 bg-black/50" />
				</div>

				{/* Centered hero copy */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="px-4 text-center text-white"
				>
					<h1 className="text-4xl md:text-6xl font-bold mb-4 h-heading">
						Transforming Lawns into Living Art
					</h1>
					<p className="mb-8 text-lg md:text-2xl max-w-2xl mx-auto">
						Premium landscaping and lawn care services for homes &
						businesses.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							size="lg"
							className="rounded-2xl shadow-xl min-w-50 bg-black"
						>
							<Link href="#quote">Get a Free Quote</Link>
						</Button>

						<Button
							variant="outline"
							asChild
							size="lg"
							className="min-w-50 border-white bg-green-700 text-white rounded-2xl hover:bg-white hover:text-green-700"
						>
							<a
								href="tel:+15551234567"
								className="inline-flex items-center gap-2"
							>
								<PhoneCall size={18} /> Call Us
							</a>
						</Button>
					</div>
				</motion.div>
			</section>

			{/* ──────────────────── Services ─────────────────── */}
			<section id="services" className="py-20 bg-green-50">
				<h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
					Our Core Services
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
					{services.map(({ title, icon: Icon, desc }) => (
						<Card
							key={title}
							className="rounded-2xl shadow-md hover:shadow-lg transition"
						>
							<CardContent className="p-8 flex flex-col items-center text-center">
								<Icon className="w-12 h-12 text-green-700 mb-4" />
								<h3 className="text-xl font-medium mb-2">
									{title}
								</h3>
								<p>{desc}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* ───────────────────── About ───────────────────── */}
			<section id="about" className="py-20">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
					<Image
						src="/images/about-landscaping.jpg"
						alt="Our landscaping team at work"
						width={600}
						height={400}
						unoptimized
						className="rounded-2xl shadow-lg object-cover"
					/>

					<div>
						<h2 className="text-3xl md:text-4xl font-semibold mb-6">
							Family‑Owned & Rooted in Quality
						</h2>
						<p className="mb-4">
							GreenScape has served the Tri‑County area for over{" "}
							<strong>15 years</strong>, combining horticultural
							expertise with modern sustainable practices. From
							small residential yards to sprawling commercial
							campuses, our mission is the same: deliver
							landscapes that thrive and delight.
						</p>
						<p className="mb-6">
							Every project begins with a complimentary on‑site
							consultation and a digital 3‑D design so you know
							exactly what to expect—no surprises.
						</p>

						<Link href="/contact">
							<Button
								variant="outline"
								size="lg"
								className="min-w-50 border-white bg-green-700 text-white rounded-2xl hover:bg-white hover:text-green-700 hover:border-green-700"
							>
								Schedule a consultation
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* ──────────────────── Gallery ─────────────────── */}
			<section id="gallery" className="py-20 bg-green-50">
				<h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
					Recent Transformations
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
					{[1, 2, 3, 4].map((i) => (
						<div
							key={i}
							className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow"
						>
							<Image
								src={`/images/gallery-${i}.jpg`}
								alt={`Landscaping project ${i}`}
								fill
								unoptimized
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</section>

			{/* ──────────────────── CTA / Quote ─────────────────── */}
			<section
				id="quote"
				className="py-20 bg-gradient-to-b from-green-700 to-green-900 text-white text-center px-6"
			>
				<h2 className="text-3xl md:text-4xl font-semibold mb-4">
					Ready to elevate your outdoors?
				</h2>
				<p className="mb-8 max-w-xl mx-auto">
					Request a free, no‑obligation estimate today and see how our
					team can bring your vision to life.
				</p>
				<Button
					size="lg"
					className="bg-white text-green-800 rounded-2xl shadow-xl"
				>
					Request a Quote
				</Button>
			</section>
		</main>
	);
}
