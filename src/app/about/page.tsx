import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/layout/Hero";

export const metadata = {
	title: "About | Greenscape Landscaping",
	description:
		"Lawn care, landscape design, and irrigation services for Richmond, VA. Explore our offerings and request a free quote.",
};

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
			<Hero
				imageSrc="/images/about/about-hero.webp"
				title="Our Roots, Mission, and People"
			/>

			{/* ─────────────────── Our Story ────────────────── */}
			<section className="py-12 sm:py-20">
				<div className="max-w-5xl mx-auto grid gap-10 px-4 sm:px-6 md:grid-cols-2 items-center">
					<Image
						src="/images/about/founder.webp"
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

				<Link href="/contact">
					<Button
						variant="outline"
						size="lg"
						className="min-w-50 border-white bg-green-700 text-white rounded-2xl hover:bg-white hover:text-green-700 hover:border-green-700"
					>
						Apply Now
					</Button>
				</Link>
			</section>
		</main>
	);
}
