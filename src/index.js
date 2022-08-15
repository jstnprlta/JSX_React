// 1) import the React and ReactDom Libraries
import React from "react";
import ReactDom from "react-dom/client";

// 2) Get a resference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of the element
const root = ReactDom.createRoot(el);

// 4) Create a component, is a function that returns some jsx
function App() {

    return <textarea autoFocus={true} />;
    
}

//Show the component on the screen
root.render(<App />);
