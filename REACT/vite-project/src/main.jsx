import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import GithubProject from "./GithubProject";


createRoot (document. getElementById("root")).render(

  <StrictMode>
    <GithubProject />
  </StrictMode>,
);
