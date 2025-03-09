import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AsyncComponent() {
  const [data, setData] = useState(null); // state to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        setData(response.data); // update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // call the fetch function
  }, []); // empty dependency array to run once when component mounts

  return (
    <>
      {data ? (
        <div>
          <h3>Todo Title: {data.title}</h3>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
