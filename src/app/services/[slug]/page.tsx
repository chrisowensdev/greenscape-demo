import { getService, listServices } from "@/utils/content";
import type { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
	return listServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const s = getService(slug);
	return {
		title: s?.seo?.title ?? `${s?.name} | Greenscape`,
		description: s?.seo?.description ?? s?.summary,
	};
}

export default async function ServiceDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const s = getService(slug);
	if (!s) return null;

	return (
		<article className="container mx-auto px-4 py-12">
			<header className="mb-6">
				<h1 className="text-3xl font-semibold">{s.name}</h1>
				<p className="text-gray-600">{s.summary}</p>
			</header>

			{s.features?.length ? (
				<ul className="grid sm:grid-cols-2 gap-3 mb-8 list-disc pl-5">
					{s.features.map((f) => (
						<li key={f}>{f}</li>
					))}
				</ul>
			) : null}

			{s.gallery?.length ? (
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{s.gallery.map((src) => (
						<Image
							key={src}
							src={src}
							alt={`${s.name} example`}
							width={600}
							height={400}
							className="rounded-xl"
						/>
					))}
				</div>
			) : null}
		</article>
	);
}
