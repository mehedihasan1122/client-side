import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/newsSummaryCard/NewsSummaryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1 className="text-danger bolder">
        There Are {categoryNews.length} News
      </h1>

      {categoryNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
