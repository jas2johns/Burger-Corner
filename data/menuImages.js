export const menuImageMap = {
	1: {
		src: "/images/menu/classic-burger.jpg",
		alt: "Classic Burger with cheese, lettuce, tomato, onion, and Corner Sauce",
		position: "45% center",
		scale: 1.12,
		transformOrigin: "45% 62%",
		enabled: true,
	},
	2: {
		src: "/images/menu/double-corner.jpg",
		heroSrc: "/images/menu/double-corner-hero.webp",
		alt: "The Double Corner double cheeseburger with melted cheese, pickles, and Corner Sauce",
		position: "center 60%",
		enabled: true,
	},
	3: {
		src: "/images/menu/hawaiian-burger.webp",
		alt: "Hawaiian Burger with grilled pineapple, Monterey Jack, and teriyaki glaze",
		position: "center center",
		enabled: false,
	},
	4: {
		src: "/images/menu/western-bbq.webp",
		alt: "Western BBQ burger with crispy onions, Monterey Jack, and smoky BBQ sauce",
		position: "center center",
		enabled: false,
	},
	5: {
		src: "/images/menu/california-burger.webp",
		alt: "California Burger with avocado, Oaxaca cheese, lettuce, and pico de gallo",
		position: "center center",
		enabled: false,
	},
	6: {
		src: "/images/menu/patty-melt.webp",
		alt: "Patty Melt on toasted sourdough with beef, melted cheese, and caramelized onions",
		position: "center center",
		enabled: false,
	},
	7: {
		src: "/images/menu/garden-salad.webp",
		alt: "Garden Salad with crisp greens, tomato, cucumber, and vegetables",
		position: "center center",
		enabled: false,
	},
	8: {
		src: "/images/menu/caesar-salad.webp",
		alt: "Caesar Salad with romaine, parmesan, croutons, and dressing",
		position: "center center",
		enabled: false,
	},
	9: {
		src: "/images/menu/crispy-fries.webp",
		alt: "Crispy Fries served golden and lightly seasoned",
		position: "center center",
		enabled: false,
	},
	10: {
		src: "/images/menu/golden-onion-rings.webp",
		alt: "Golden Onion Rings fried crisp in a paper tray",
		position: "center center",
		enabled: false,
	},
	11: {
		src: "/images/menu/soft-drinks.webp",
		alt: "Soft Drinks in a cold fountain cup",
		position: "center bottom",
		enabled: false,
	},
};

export function getMenuItemVisual(menuItem) {
	const mappedImage = menuImageMap[menuItem.id];

	if (mappedImage?.enabled === true && mappedImage.src) {
		return {
				alt: mappedImage.alt,
				kind: "photo",
				position: mappedImage.position || "center center",
				scale: mappedImage.scale || 1,
				src: mappedImage.src,
				transformOrigin:
					mappedImage.transformOrigin || "center center",
			};
	}

	return {
		alt: menuItem.name
			? `Illustration of ${menuItem.name}`
			: menuItem.description || "Burger Corner menu item illustration",
		kind: "illustration",
		position: "center center",
		scale: 1,
		src: `/${menuItem.image}`,
		transformOrigin: "center center",
	};
}
