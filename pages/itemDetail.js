import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ItemDetail = () => {
	const router = useRouter();
	const [itemId, setItemId] = useState();

	useEffect(() => {
		if (router.isReady) {
			const itemId = router.query.itemId;

			setItemId(itemId);

			//TODO: Write logic to use the id from the query params to
			// get item details/build page/whatever
		}
	}, [router.isReady]);

	return (
		<div>
			<h1>The Detail Page</h1>
			You&apos;ve got itemId {itemId}
		</div>
	);
};

export default ItemDetail;
