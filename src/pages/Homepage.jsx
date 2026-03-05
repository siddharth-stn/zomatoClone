import SectionInspiration from "@/components/SectionInspiration";
import TopBrands from "@/components/TopBrands";
import axios from "axios";
import { useEffect, useState } from "react";
import { restaurantData } from "@/lib/data";
import EndSearch from "@/components/EndSearch";

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
      <TopBrands data={restaurantData} />
      <EndSearch />
    </main>
  );
};

export default Homepage;
