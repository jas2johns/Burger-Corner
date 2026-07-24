import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Seo from "../components/Seo";
import styles from "../styles/Contact.module.css";

const contactDetails = {
	address: {
		label: "Address",
		lines: ["125 Corner Street", "San Diego, CA 92101"],
		icon: PlaceOutlinedIcon,
	},
	phone: {
		label: "Phone",
		value: "(619) 555-0147",
		href: "tel:+16195550147",
		icon: LocalPhoneOutlinedIcon,
	},
	email: {
		label: "Email",
		value: "hello@burgercorner.com",
		href: "mailto:hello@burgercorner.com",
		icon: EmailOutlinedIcon,
	},
	hours: {
		label: "Hours",
		lines: [
			"Monday-Thursday: 11:00 AM-9:00 PM",
			"Friday-Saturday: 11:00 AM-10:00 PM",
			"Sunday: 11:00 AM-8:00 PM",
		],
		icon: AccessTimeIcon,
	},
};

const initialFormValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
	const nextErrors = {};

	if (!values.name.trim()) {
		nextErrors.name = "Please enter your name.";
	}

	if (!values.email.trim()) {
		nextErrors.email = "Please enter your email address.";
	} else if (!emailPattern.test(values.email.trim())) {
		nextErrors.email = "Please enter a valid email address.";
	}

	if (!values.subject.trim()) {
		nextErrors.subject = "Please enter a subject.";
	}

	if (!values.message.trim()) {
		nextErrors.message = "Please enter a message.";
	} else if (values.message.trim().length < 10) {
		nextErrors.message = "Please enter at least 10 characters.";
	}

	return nextErrors;
}

export default function Contact() {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const handleFieldChange = (event) => {
		const { name, value } = event.target;

		setFormValues((currentValues) => ({
			...currentValues,
			[name]: value,
		}));

		if (errors[name]) {
			setErrors((currentErrors) => {
				const nextErrors = { ...currentErrors };
				delete nextErrors[name];
				return nextErrors;
			});
		}

		if (statusMessage) {
			setStatusMessage("");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const nextErrors = validateForm(formValues);
		setErrors(nextErrors);
		setStatusMessage("");

		if (Object.keys(nextErrors).length > 0) {
			return;
		}

		setIsSubmitting(true);

		// Demo-only flow until a backend or email service is added.
		window.setTimeout(() => {
			setIsSubmitting(false);
			setFormValues(initialFormValues);
			setStatusMessage("Thanks for reaching out. We'll get back to you soon.");
		}, 700);
	};

	return (
		<div className={styles.page}>
			<Seo
				description="Contact Burger Corner for questions, feedback, large orders, catering, hours, and restaurant information."
				image="/menu.jpg"
				path="/contact"
				title="Contact Burger Corner | Hours, Location, and Questions"
			/>

			<main className={styles.main}>
				<section className={styles.hero} aria-labelledby="contact-title">
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>Get In Touch</p>
						<h1 id="contact-title">We&apos;d love to hear from you.</h1>
						<p className={styles.lede}>
							Have a question about Burger Corner, a larger order,
							catering, feedback, or restaurant details? Send us a
							note and we will point you in the right direction.
						</p>
					</div>

					<div className={styles.heroImageFrame}>
						<Image
							alt="Burger Corner burgers and fries shared around a table"
							className={styles.heroImage}
							src="/menu.jpg"
							layout="fill"
							priority
							sizes="(max-width: 900px) 100vw, 46vw"
						/>
					</div>
				</section>

				<section
					className={styles.contactGrid}
					aria-labelledby="contact-info-title"
				>
					<div className={styles.infoPanel}>
						<div className={styles.sectionIntro}>
							<p className={styles.eyebrow}>Restaurant Info</p>
							<h2 id="contact-info-title">Stop by or reach out.</h2>
						</div>

						<div className={styles.detailGrid}>
							{Object.entries(contactDetails).map(([key, detail]) => {
								const Icon = detail.icon;

								return (
									<article className={styles.detailCard} key={key}>
										<span className={styles.iconWrap}>
											<Icon aria-hidden="true" />
										</span>
										<div>
											<h3>{detail.label}</h3>
											{detail.href ? (
												<a href={detail.href}>{detail.value}</a>
											) : (
												detail.lines.map((line) => (
													<p key={line}>{line}</p>
												))
											)}
										</div>
									</article>
								);
							})}
						</div>
					</div>

					<section className={styles.formPanel} aria-labelledby="form-title">
						<div className={styles.sectionIntro}>
							<p className={styles.eyebrow}>Send A Note</p>
							<h2 id="form-title">Tell us what you need.</h2>
						</div>

						<form className={styles.form} noValidate onSubmit={handleSubmit}>
							<div className={styles.fieldGroup}>
								<label htmlFor="name">Name</label>
								<input
									aria-describedby={errors.name ? "name-error" : undefined}
									aria-invalid={errors.name ? "true" : "false"}
									autoComplete="name"
									id="name"
									name="name"
									onChange={handleFieldChange}
									required
									type="text"
									value={formValues.name}
								/>
								{errors.name && (
									<p className={styles.errorText} id="name-error">
										{errors.name}
									</p>
								)}
							</div>

							<div className={styles.fieldGroup}>
								<label htmlFor="email">Email</label>
								<input
									aria-describedby={errors.email ? "email-error" : undefined}
									aria-invalid={errors.email ? "true" : "false"}
									autoComplete="email"
									id="email"
									name="email"
									onChange={handleFieldChange}
									required
									type="email"
									value={formValues.email}
								/>
								{errors.email && (
									<p className={styles.errorText} id="email-error">
										{errors.email}
									</p>
								)}
							</div>

							<div className={styles.fieldGroup}>
								<label htmlFor="subject">Subject</label>
								<input
									aria-describedby={
										errors.subject ? "subject-error" : undefined
									}
									aria-invalid={errors.subject ? "true" : "false"}
									id="subject"
									name="subject"
									onChange={handleFieldChange}
									required
									type="text"
									value={formValues.subject}
								/>
								{errors.subject && (
									<p className={styles.errorText} id="subject-error">
										{errors.subject}
									</p>
								)}
							</div>

							<div className={styles.fieldGroup}>
								<label htmlFor="message">Message</label>
								<textarea
									aria-describedby={
										errors.message ? "message-error" : undefined
									}
									aria-invalid={errors.message ? "true" : "false"}
									id="message"
									name="message"
									onChange={handleFieldChange}
									required
									rows="5"
									value={formValues.message}
								/>
								{errors.message && (
									<p className={styles.errorText} id="message-error">
										{errors.message}
									</p>
								)}
							</div>

							<div className={styles.formFooter}>
								<button
									className={styles.submitButton}
									disabled={isSubmitting}
									type="submit"
								>
									{isSubmitting ? "Sending..." : "Send Message"}
								</button>
								<p
									aria-live="polite"
									className={styles.statusMessage}
									role="status"
								>
									{statusMessage}
								</p>
							</div>
						</form>
					</section>
				</section>

				<section className={styles.closing} aria-labelledby="catering-title">
					<div>
						<p className={styles.eyebrow}>Group Orders</p>
						<h2 id="catering-title">Planning a larger order?</h2>
						<p>
							Office lunches, parties, and weekend get-togethers
							are better with burgers. Browse the menu, then send
							us a note when you are ready to talk through the
							details.
						</p>
					</div>
					<Link href="/menu">
						<a className={styles.menuButton}>Explore the Menu</a>
					</Link>
				</section>
			</main>
		</div>
	);
}
