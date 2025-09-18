import { useEffect, useState } from "react";
import { NEWS_API } from "../../util/constants";
import NewsCard from "./NewsCard";
import axios from "axios";
import Navbar from "../navbar";

function News() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    async function getNews() {
      try {
        setIsLoading(true);
        const response = await axios.get(NEWS_API);
        setArticles(response.data.articles);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    getNews();
  }, [shouldFetch]);

  if (isLoading) {
    return (
        <>
        <Navbar />
        <div className="flex h-[300px] items-center justify-center">
        Loading...
        </div>
        </>
    );
  }

  if (error) {
    return (
        <>
        <Navbar />
        <div className="my-8 text-center font-semibold text-red-500">{error}</div>
        </>
    );
  }

  return (
    <>
      <Navbar articles={articles} setArticles={setArticles} setShouldFetch={setShouldFetch}/>
      <div className="mx-8 my-10 grid grid-cols-1 gap-4 hover:cursor-pointer sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((eachNews) => (
          <NewsCard eachNews={eachNews} key={eachNews.title} />
        ))}
      </div>
    </>
  );
}

export default News;
