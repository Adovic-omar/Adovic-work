import { StrictMode } from "react"';
import ( createRoot) from "react-dom/client";

/*
path ->"./"
import ‹AnyName :Default Export> from "Path" 
import js or jsx files. The extension is optional
*/
import Navigation from "./AmazonPage/Navigation";
import FilterList from "./AmazonPage/FilterList";
import ItemCard from "./AmazonPage/ItemCard";
import "./index.css";
createRoot (document. getElementById("root")) . render (

  <StrictMode>
    <Navigation />
    <FilterList />
    <ItemCard />
  </StrictMode>,
) ;
