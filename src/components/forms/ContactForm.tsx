"use client";
import { useState } from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	return (
		<div>
			<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
				Send a Message
			</h2>
			{submitted ? (
				<p className="p-6 bg-green-100 rounded-2xl shadow text-green-800">
					Thank you! We’ll be in touch within one business day.
				</p>
			) : (
				<form
					action="https://formspree.io/f/yourFormId" // 🔄 replace with real Formspree ID
					method="POST"
					onSubmit={() => setSubmitted(true)}
					className="grid gap-4"
				>
					<input
						type="text"
						name="name"
						required
						placeholder="Full Name"
						className="border border-neutral-300 rounded-lg p-3 w-full"
					/>
					<input
						type="email"
						name="email"
						required
						placeholder="Email Address"
						className="border border-neutral-300 rounded-lg p-3 w-full"
					/>
					<textarea
						name="message"
						required
						rows={6}
						placeholder="How can we help you?"
						className="border border-neutral-300 rounded-lg p-3 resize-none w-full"
					/>

					<Button
						type="submit"
						variant="outline"
						size="lg"
						className="min-w-50 border-white bg-green-700 text-white rounded-2xl hover:bg-white hover:text-green-700 hover:border-green-700 w-full"
					>
						Send Message
					</Button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
