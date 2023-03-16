import React from "react";
import ReactDOM from "react-dom/client";

import Header  from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
