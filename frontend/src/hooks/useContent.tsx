import { useEffect, useState } from "react";
import axios from "axios";

export function useContent() {
	const [contents, setContent] = useState([]);

	useEffect(() => {
		const result = axios.get(import.meta.env.VITE_BACKEND_URL + "/api/v1/content", {
			headers: {
				"authorization": localStorage.getItem("token")
			}
		})
		.then((result) => {
			setContent(result.data.content)
		});
	}, [])

	return contents;

}