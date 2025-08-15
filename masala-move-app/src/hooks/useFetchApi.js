import { useEffect, useState } from "react";

const useFetchApi = ({ url, resId }) => {
    const [data, setData] = useState(null);

    const fetchApi = async () => {
        const fetchUrl = resId ? url + resId : url;
        const res = await fetch(fetchUrl);
        const jsonData = await res.json();

        setData(jsonData);
    };

    useEffect(() => {
        fetchApi();
    }, [url, resId]);

    return { data };
};

export default useFetchApi;
