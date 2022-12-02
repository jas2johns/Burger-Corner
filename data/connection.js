export async function initDB() {
	await mongoose.connect(
		'mongodb+srv://jas2johns:BobBelcher1@burgercornercluster.unlzmtl.mongodb.net/Burger-Corner?retryWrites=true&w=majority'
	);
	const MenuSchema = new mongoose.Schema({
		categories: [
			{
				name: String,
				items: [
					{
						id: Number,
						description: String,
						image: String
					}
				]
			}
		]
	});
	const Menu = mongoose.model('Menu', MenuSchema);
}
