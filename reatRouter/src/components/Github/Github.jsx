import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/pranavhajare")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center bg-gray-500">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" width="220px" />
    </div>
  );
};

export { Github };

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/pranavhajare");
  return response.json();
};
