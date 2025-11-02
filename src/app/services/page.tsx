import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { faqs } from "@/content/faqs"; // optional if you added it
import Section from "@/components/section/Section";
import LeafDivider from "@/components/section/LeafDivider";

export const metadata = {
	title: "Services | Greenscape Landscaping",
	description:
		"Lawn care, landscape design, and irrigation services for Richmond, VA. Explore our offerings and request a free quote.",
	openGraph: {
		title: "Greenscape Landscaping Services",
		images: ["/logo.png"],
	},
};

export default function ServicesPage() {
	return (
		<>
			<main>
				{/* Hero */}
				{/* <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white"> */}
				{/* <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20"> */}
				<Section bg="leaf" className="relative">
					<div className="max-w-3xl">
						<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl h-heading">
							Full-service landscaping, built for results
						</h1>
						<p className="mt-3 text-gray-600">
							From weekly lawn care to complete outdoor
							transformations, we deliver reliable quality across
							Richmond and surrounding areas.
						</p>
						<div className="mt-6 flex gap-3">
							<Link
								href="/contact"
								className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700"
							>
								Get a free quote
							</Link>
							<a
								href="tel:+18045550134"
								className="rounded-xl border border-gray-300 px-5 py-3 hover:bg-gray-50"
							>
								(804) 555-0134
							</a>
						</div>
					</div>

					{/* Jump chips */}
					<div className="mt-8 flex flex-wrap gap-2">
						{services.map((s) => (
							<a
								key={s.slug}
								href={`#${s.slug}`}
								className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm hover:border-emerald-400"
							>
								{s.name}
							</a>
						))}
					</div>
				</Section>
				{/* </div> */}
				{/* </section> */}
				<LeafDivider />

				{/* Cards grid */}
				<section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((s) => (
							<article
								key={s.slug}
								id={s.slug}
								className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
							>
								{s.heroImage ? (
									<div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
										<Image
											src={s.heroImage}
											alt={s.name}
											fill
											className="object-cover transition-transform duration-300 group-hover:scale-105"
											sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
											priority={false}
										/>
									</div>
								) : null}
								<h2 className="text-lg font-semibold">
									{s.name}
								</h2>
								<p className="mt-1 text-sm text-gray-600">
									{s.summary}
								</p>

								{s.features?.length ? (
									<ul className="mt-3 space-y-1 text-sm text-gray-700">
										{s.features.slice(0, 4).map((f) => (
											<li
												key={f}
												className="flex items-start gap-2"
											>
												<span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
												<span>{f}</span>
											</li>
										))}
									</ul>
								) : null}

								<div className="mt-5 flex items-center justify-between">
									{s.startingPrice ? (
										<span className="text-sm font-medium text-gray-800">
											From {s.startingPrice}
										</span>
									) : (
										<span />
									)}
									<Link
										href={`/services/${s.slug}`}
										className="text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
									>
										Learn more →
									</Link>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Process / How it works */}
				<section className="border-y border-gray-200 bg-gray-50">
					<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
						<h2 className="text-2xl font-semibold">How we work</h2>
						<ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{[
								{
									step: "1",
									title: "On-site consult",
									desc: "Walk-through and goals.",
								},
								{
									step: "2",
									title: "Design & quote",
									desc: "Clear proposal and timeline.",
								},
								{
									step: "3",
									title: "Install",
									desc: "On time, tidy, professional.",
								},
								{
									step: "4",
									title: "Care",
									desc: "Maintenance plans available.",
								},
							].map((it) => (
								<li
									key={it.step}
									className="rounded-2xl bg-white p-5 shadow-sm"
								>
									<div className="flex items-center gap-3">
										<span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
											{it.step}
										</span>
										<h3 className="font-medium">
											{it.title}
										</h3>
									</div>
									<p className="mt-2 text-sm text-gray-600">
										{it.desc}
									</p>
								</li>
							))}
						</ol>
					</div>
				</section>

				{/* Trust signals */}
				<section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								h: "Licensed & Insured",
								p: "Peace of mind on every project.",
							},
							{
								h: "5-Star Reviews",
								p: "Customers love our reliability.",
							},
							{
								h: "Local Experts",
								p: "Serving Greater Richmond.",
							},
							{
								h: "Sustainable Practices",
								p: "Smart irrigation & native plants.",
							},
						].map((b) => (
							<div key={b.h} className="rounded-2xl border p-6">
								<h3 className="font-semibold">{b.h}</h3>
								<p className="mt-1 text-sm text-gray-600">
									{b.p}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* FAQs (optional) */}
				{faqs?.length ? (
					<section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
						<h2 className="text-2xl font-semibold">
							Frequently asked questions
						</h2>
						<div className="mt-6 divide-y rounded-2xl border">
							{faqs.slice(0, 5).map((f) => (
								<details key={f.q} className="group p-5">
									<summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
										{f.q}
										<span className="ml-4 select-none text-gray-400 group-open:rotate-180">
											⌄
										</span>
									</summary>
									<p className="mt-2 text-sm text-gray-700">
										{f.a}
									</p>
								</details>
							))}
						</div>
					</section>
				) : null}

				{/* CTA banner */}
				<section className="bg-emerald-700">
					<div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 text-white sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="text-xl font-semibold">
								Ready for a yard you love?
							</h2>
							<p className="text-emerald-100">
								Get a free, no-obligation estimate today.
							</p>
						</div>
						<div className="flex gap-3">
							<Link
								href="/contact"
								className="rounded-xl bg-white px-5 py-3 font-medium text-emerald-800 hover:bg-emerald-50"
							>
								Get a free quote
							</Link>
							<a
								href="tel:+18045550134"
								className="rounded-xl border border-white/30 px-5 py-3"
							>
								Call (804) 555-0134
							</a>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
