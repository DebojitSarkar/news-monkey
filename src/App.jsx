import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NEWS_API } from "./util/constants";
import Navbar from "./components/navbar";
import News from "./components/news";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      // const response = await axios.get(NEWS_API);
      // setNews(response.data.articles);
    }
    getNews();
  }, []);

  return (
    <>
      <News />
    </>
  );
}

export default App;
