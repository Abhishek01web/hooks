import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
    const [data, setData] = useState(null);

    const client = axios.create({
        url
    });

    useEffect(() => {
       client.get(url)
      .then(res => setData(res.data));
    }, [url]);
    return {data};
}

export default useFetchData;