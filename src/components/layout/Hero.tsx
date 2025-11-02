"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = ({ imageSrc, title }: { imageSrc: string; title: string }) => {
	return (
		<section className="relative isolate grid place-items-center h-[50vh] sm:h-[60vh] overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<Image
					src={imageSrc}
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
				{title}
			</motion.h1>
		</section>
	);
};

export default Hero;
