import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <div className="sticky-top">
      <h3 className="text-success fw-bold "> Type of News</h3>

      <div className=" p-1">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="bg-danger text-black fs-6 ms-1 px-1 w-75 text-decoration-none rounded "
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
