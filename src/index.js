// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react Component
const App = () => {
    const buttonText = { text: "Click me" };
    const style = { backgroundColor: "blue", color: "white" };
    const labelText = 'Enter Name:';

    return (
    <div>
      {/* class=html  className=Jsx */}
    <label className="label" htmlFor="name">
        {labelText}
    </label>
        <input id="name" type="text" />
        <button style={style}>{buttonText.text}</button>
    </div>
    );
};

// Take the react component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
