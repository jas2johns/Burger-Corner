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
		alt: "The Double Corner double cheeseburger with melted cheese, pickles, and Corner Sauce",
		position: "center 60%",
		enabled: true,
	},
	3: {
		src: "/images/menu/hawaiian-burger.jpg",
		alt: "Hawaiian Burger with grilled pineapple, Monterey Jack, and teriyaki glaze",
		position: "center center",
		enabled: true,
	},
	4: {
		src: "/images/menu/western-bbq.jpg",
		alt: "Western BBQ burger with crispy onions, Monterey Jack, and smoky BBQ sauce",
		position: "center center",
		enabled: true,
	},
	5: {
		src: "/images/menu/california-burger.jpg",
		alt: "California Burger with avocado, Oaxaca cheese, lettuce, and pico de gallo",
		position: "center center",
		scale: 1.12,
		transformOrigin: "center 58%",
		enabled: true,
	},
	6: {
		src: "/images/menu/patty-melt.jpg",
		alt: "Patty Melt on toasted sourdough with beef, melted cheese, and caramelized onions",
		position: "center center",
		enabled: true,
	},
	7: {
		src: "/images/menu/garden-salad.jpg",
		alt: "Garden Salad with crisp greens, tomato, cucumber, and vegetables",
		position: "center center",
		enabled: true,
	},
	8: {
		src: "/images/menu/caesar-salad.jpg",
		alt: "Caesar Salad with romaine, parmesan, croutons, and dressing",
		position: "center center",
		enabled: true,
	},
	9: {
		src: "/images/menu/crispy-fries.jpg",
		alt: "Crispy Fries served golden and lightly seasoned",
		position: "center center",
		enabled: true,
	},
	10: {
		src: "/images/menu/golden-onion-rings.jpg",
		alt: "Golden Onion Rings fried crisp in a paper tray",
		position: "center center",
		enabled: true,
	},
	11: {
		src: "/images/menu/soft-drinks.jpg",
		alt: "Soft Drinks in three cold fountain cups",
		position: "center center",
		enabled: true,
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
