import { services } from "@/content/services";
import { projects } from "@/content/projects";
import type { Service } from "@/types/content";

export const bySlug =
	<T extends { slug: string }>(arr: T[]) =>
	(slug: string) =>
		arr.find((x) => x.slug === slug);

export const getService = bySlug(services);
export const getProject = bySlug(projects);

export const listServices = () => services;
export const featuredServices = (): Service[] =>
	services.filter((s) => ["lawn-care", "landscape-design"].includes(s.slug));
