import Head from "next/head";

export const SITE_URL = "https://burgercorner.example";

const DEFAULT_IMAGE = "/BURGER.jpg";

export const absoluteUrl = (path) => {
	if (!path) {
		return SITE_URL;
	}

	if (path.startsWith("http")) {
		return path;
	}

	return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const restaurantStructuredData = {
	"@context": "https://schema.org",
	"@type": "Restaurant",
	name: "Burger Corner",
	description:
		"A neighborhood burger restaurant serving fresh, made-to-order burgers, crispy sides, salads, sandwiches, and cold drinks.",
	url: SITE_URL,
	telephone: "+1-619-555-0147",
	servesCuisine: ["American", "Burgers"],
	priceRange: "$$",
	image: absoluteUrl("/BURGER.jpg"),
	logo: absoluteUrl("/Burger_Corner__1_-removebg-preview.png"),
	address: {
		"@type": "PostalAddress",
		streetAddress: "125 Corner Street",
		addressLocality: "San Diego",
		addressRegion: "CA",
		postalCode: "92101",
		addressCountry: "US",
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
			opens: "11:00",
			closes: "21:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Friday", "Saturday"],
			opens: "11:00",
			closes: "22:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Sunday",
			opens: "11:00",
			closes: "20:00",
		},
	],
};

const websiteStructuredData = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Burger Corner",
	url: SITE_URL,
	description:
		"Browse Burger Corner's menu, restaurant story, contact details, and shopping cart demo.",
};

export const homeStructuredData = [
	restaurantStructuredData,
	websiteStructuredData,
];

export default function Seo({
	description,
	image = DEFAULT_IMAGE,
	path = "/",
	structuredData = [],
	title,
	type = "website",
}) {
	const canonicalUrl = absoluteUrl(path);
	const imageUrl = absoluteUrl(image);

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={canonicalUrl} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={imageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			<meta
				key="theme-color-light"
				name="theme-color"
				media="(prefers-color-scheme: light)"
				content="#fff8ef"
			/>
			<meta
				key="theme-color-dark"
				name="theme-color"
				media="(prefers-color-scheme: dark)"
				content="#11100f"
			/>
			<meta name="color-scheme" content="light dark" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="manifest" href="/site.webmanifest" />

			{structuredData.map((schema) => (
				<script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
					key={schema["@type"]}
					type="application/ld+json"
				/>
			))}
		</Head>
	);
}
