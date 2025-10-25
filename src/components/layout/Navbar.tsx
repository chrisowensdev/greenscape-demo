// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const menuItems: string[] = ["Home", "Services", "About", "Contact"];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = (): void => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo & Brand */}
				<Link href="/" className="flex items-center">
					<Image
						src="/logo.png"
						alt="GreenScape Logo"
						width={40}
						height={40}
					/>
					<span className="ml-2 text-2xl font-bold text-green-700">
						GreenScape
					</span>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-8">
					{menuItems.map((item) => (
						<Link
							key={item}
							href={
								item === "Home" ? "/" : `/${item.toLowerCase()}`
							}
							className="text-gray-700 hover:text-green-700 transition"
						>
							{item}
						</Link>
					))}
				</div>

				{/* Mobile Toggle */}
				<button
					onClick={toggleMenu}
					className="md:hidden focus:outline-none"
					aria-label="Toggle menu"
				>
					{isOpen ? (
						<XMarkIcon className="h-6 w-6 text-gray-700" />
					) : (
						<Bars3Icon className="h-6 w-6 text-gray-700" />
					)}
				</button>
			</div>

			{/* Mobile Menu Animation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white overflow-hidden"
					>
						<div className="px-6 pt-4 pb-6 flex flex-col space-y-4">
							{menuItems.map((item) => (
								<Link
									key={item}
									href={
										item === "Home"
											? "/"
											: `/${item.toLowerCase()}`
									}
									className="text-gray-700 hover:text-green-700 transition"
									onClick={toggleMenu}
								>
									{item}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
