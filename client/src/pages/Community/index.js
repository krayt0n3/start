import React, { useState, useEffect } from "react";
import ImageCard from "../../components/ImageCard";
import "./community.css";



export function Community() {
  const [picture, setPicture] = useState([]);
  const [article, setArticle] = useState([]);
  const [deal, setDeal] = useState([]);

  useEffect(() => {
    function fetchPictures() {
      console.log("fetching pictures");
      fetch("/type/picture", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this is the picture data", data);
          setPicture(data);
        }); 
    }

    function fetchArticles() {
      fetch("/type/article", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this is the article data", data);
          setArticle(data);
        }); 
    }

    function fetchDeals() {
      fetch("/type/deal", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this is the deal data", data);
          setDeal(data);
        }); 
    }

    fetchPictures();
    fetchArticles();
    fetchDeals();
  },[]);

    
  return (
    <div>
      {picture.map(pictures => (
        
        <ImageCard
          key={pictures.unique_id}
          title={pictures.title}
          url={pictures.url}       
        />
       
      ))}
        
      {JSON.stringify(picture.url)}
    </div>
  ); 

}


export default Community;


