import { useEffect, useState } from "react";

const getAllCountry = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = `https://restcountries.com/v3.1/all`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
        };

        fetchData();
        
    }, []);

   
    return data;
    
}

export default getAllCountry;