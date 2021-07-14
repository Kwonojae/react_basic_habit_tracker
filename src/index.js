import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root") //root 라는 아이디를 가진 요소를 제일 상위에 있는 app컴포넌트를 연결시켜주는 부분
);
