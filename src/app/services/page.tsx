import { listServices } from "@/utils/content";
import Link from "next/link";

export default function ServicesPage() {
	const items = listServices();
	return (
		<section className="container mx-auto px-4 py-12">
			<h1 className="text-3xl font-semibold mb-6">Our Services</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{items.map((s) => (
					<article key={s.slug} className="rounded-2xl border p-6">
						<h2 className="text-xl font-semibold mb-2">{s.name}</h2>
						<p className="text-sm text-gray-600 mb-4">
							{s.summary}
						</p>
						<Link
							className="underline"
							href={`/services/${s.slug}`}
						>
							Learn more →
						</Link>
					</article>
				))}
			</div>
		</section>
	);
}
