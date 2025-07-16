"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

// --------------------------------------------------------------
//  About page – mobile‑first refinements
//  • Grids now use responsive columns (1/2/3)
//  • Text blocks gain padding on small screens
//  • Images set to w-full h-auto on mobile
// --------------------------------------------------------------

export default function AboutPage() {
	const principles = [
		{
			title: "Sustainability",
			desc: "We use eco‑friendly fertilizers and drought‑resistant plants to minimize water waste.",
		},
		{
			title: "Craftsmanship",
			desc: "Every edge cut and stone placed follows industry‑best horticultural practices.",
		},
		{
			title: "Community",
			desc: "Local hiring and volunteer projects keep us rooted in the Tri‑County area we serve.",
		},
	];

	return (
		<main className="flex flex-col bg-white text-neutral-800">
			{/* ───────────────────── Hero ───────────────────── */}
			<section className="relative isolate grid place-items-center h-[50vh] sm:h-[60vh] overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<Image
						src="/images/about-hero.jpg"
						alt="Landscape design plans"
						fill
						priority
						unoptimized
						className="object-cover object-center"
					/>
					<div className="absolute inset-0 bg-green-900/60" />
				</div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-white text-center px-4 text-3xl sm:text-4xl md:text-5xl font-bold"
				>
					Our Roots, Mission, and People
				</motion.h1>
			</section>

			{/* ─────────────────── Our Story ────────────────── */}
			<section className="py-12 sm:py-20">
				<div className="max-w-5xl mx-auto grid gap-10 px-4 sm:px-6 md:grid-cols-2 items-center">
					<Image
						src="/images/founder.jpg"
						alt="Founder portrait"
						width={500}
						height={600}
						unoptimized
						className="rounded-2xl shadow-lg object-cover w-full h-auto"
					/>

					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
							Our Story
						</h2>
						<p className="mb-4">
							What started as{" "}
							<strong>one pickup truck and a mower</strong> in
							2010 has grown into a full‑service landscaping
							company trusted by <strong>350+ residential</strong>{" "}
							and <strong>60 commercial</strong> clients.
						</p>
						<p className="mb-4">
							Founder <em>Alex Greene</em> turned his childhood
							passion for gardening into a business that combines
							artistic vision with horticultural science. From day
							one, GreenScape has been committed to delivering
							work that looks great on day 1 and thrives for
							years.
						</p>
						<p>
							Our crew of certified horticulturists, stone masons,
							and lawn‑care specialists treat every property like
							their own backyard.
						</p>
					</div>
				</div>
			</section>

			{/* ────────────────── Our Principles ─────────────── */}
			<section className="py-12 sm:py-20 bg-green-50">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 sm:mb-12">
					Our Core Principles
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
					{principles.map((p) => (
						<div
							key={p.title}
							className="text-center p-6 bg-white rounded-2xl shadow-md"
						>
							<Leaf className="w-10 h-10 text-green-700 mx-auto mb-4" />
							<h3 className="text-xl font-medium mb-2">
								{p.title}
							</h3>
							<p>{p.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* ─────────────────── CTA / Careers ─────────────── */}
			<section className="py-12 sm:py-20 text-center px-4 sm:px-6">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
					Join Our Growing Team
				</h2>
				<p className="mb-8 max-w-2xl mx-auto">
					Passionate about building beautiful outdoor spaces? We’re
					always looking for talented horticulturists, designers, and
					crew leads.
				</p>
				<Button asChild size="lg" className="rounded-2xl">
					<Link href="/contact">Apply Now</Link>
				</Button>
			</section>
		</main>
	);
}
