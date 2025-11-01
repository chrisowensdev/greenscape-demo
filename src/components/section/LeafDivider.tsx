export default function LeafDivider({ flip = false }: { flip?: boolean }) {
	return (
		<div className={flip ? "rotate-180" : ""} aria-hidden="true">
			<svg viewBox="0 0 1440 120" className="h-[80px] w-full">
				<path
					d="M0,0 C240,80 480,120 720,120 C960,120 1200,80 1440,0 L1440,120 L0,120 Z"
					fill="hsl(var(--muted))"
				/>
			</svg>
		</div>
	);
}
