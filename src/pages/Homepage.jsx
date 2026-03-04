import SectionInspiration from "@/components/SectionInspiration";
import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {

  const [resData, setResData] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes", {
      params: {
        limit: 10
      }
    })
      .then((response) => {
        setResData(response.data.recipes)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <main>
      <SectionInspiration data={resData} />
    </main>
  );
};

export default Homepage;
