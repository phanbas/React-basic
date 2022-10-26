import React, {useState, useEffect} from "react";


export default function MyComponent() {
    const [data, setData] = useState([])
    useEffect(()=>{
      fetch("https://phanbas-strapi.herokuapp.com/api/blogs/")
      .then(res =>res.json())
      .then(data => setData(data.attributes));
    }, []);

    return (
        <>
           {data.map((val)=>
                    val.id===1 && <h2>{val.title}</h2>
                )}
        </>
    );
  }

