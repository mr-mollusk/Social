import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postsData = [
    { id: 1, message: "Hi, I am React master!", likesCount: 12 },
    { id: 2, message: "No, I", likesCount: 100000 },
    { id: 3, message: "Hahaha", likesCount: 3 },
    { id: 4, message: "Blablabla", likesCount: 1 },
];

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
