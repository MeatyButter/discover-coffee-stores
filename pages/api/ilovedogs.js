// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { toTitleCase } from "../../utils";

export default function handler(req, res) {
    const query = req.query.breed;
    const breed = toTitleCase(query.replace(/-/g, " "));

    res.status(200).json({ message: `I love ${breed}` })
}
  