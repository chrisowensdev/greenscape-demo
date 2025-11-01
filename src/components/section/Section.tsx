import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
	children,
	className,
	bg = "none",
	padded = true,
}: {
	children: ReactNode;
	className?: string;
	bg?: "none" | "muted" | "leaf";
	padded?: boolean;
}) {
	const bgClass =
		bg === "muted"
			? "bg-muted"
			: bg === "leaf"
			? "bg-leaf-texture bg-noise"
			: "";

	return (
		<section
			className={clsx(bgClass, padded && "py-14 sm:py-20", className)}
		>
			<div className="mx-auto w-full max-w-6xl px-4">{children}</div>
		</section>
	);
}
