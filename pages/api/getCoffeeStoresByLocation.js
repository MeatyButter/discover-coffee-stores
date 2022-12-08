import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
    try {
        const { latLong, limit } = req.query;
        const response = await fetchCoffeeStores(latLong, limit);

        // Pass the values
        res.status(200);
        res.json(response);
    } catch (error) {
        console.error('There is an error', error);
        res.status(500);
        res.json({ message: "Oh no! Something wend wrong", error });
    }
    //return
}

export default getCoffeeStoresByLocation;