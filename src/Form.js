import React from "react";

export default function PizzaForm(props) {
    const { values, onInputChange, onSubmit, disabled, errors, onCheckboxChange } = props;

    const toppings = [
        { name: "pepperoni", text: "Pepperoni" },
        { name: "sausage", text: "Sausage" },
        { name: "bacon", text: "Bacon" },
        { name: "spicyItalianSausage", text: "Spicy Italian Sausage" },
        { name: "onions", text: "Onions" },
        { name: "greenPeppers", text: "Green Peppers" },
        { name: "blackOlives", text: "Black Olives" },
        { name: "roastedGarlic", text: "Roasted Garlic" },
        { name: "pineapple", text: "Pineapple" },
        { name: "extraCheese", text: "Extra Cheese" },
    ];

    return (
        <form onSubmit={onSubmit}>
            <h1>Build Your Own Pizza</h1>
            <img src="../Assets/Pizza.jpg" alt="pizzaBanner"></img>
            <h2>Build Your Own Pizza</h2>
            <div className="nameDiv">
                <div className="nameText">
                    <h3>Name</h3>
                    <p>Required</p>
                </div>
                <input type="text" value={values.username} onChange={onInputChange} name="username"></input>
            </div>
            <div className="sizeDiv">
                <div className="sizeText">
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <select onChange={onInputChange} value={values.size} name="size">
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div className="sauceDiv">
                <div className="sauceText">
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
                <input type="radio" name="sauce" value="originalRed" onChange={onInputChange}></input>
                <span>Original Red</span>
                <br></br>
                <input type="radio" name="sauce" value="garlicRanch" onChange={onInputChange}></input>
                <span>Garlic Ranch</span>
                <br></br>
                <input type="radio" name="sauce" value="bbqSauce" onChange={onInputChange}></input>
                <span>BBQ Sauce</span>
                <br></br>
                <input type="radio" name="sauce" value="spinachAlfredo" onChange={onInputChange}></input>
                <span>Spinach Alfredo</span>
                <br></br>
            </div>
            <div className="toppingsDiv">
                <div className="toppingsText">
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                </div>
                {
                    toppings.map(el => {
                        return (
                            <div>
                                <input type="checkbox" name={el.name} onChange={onCheckboxChange} checked={values.toppings[el.name]}></input>
                                <span>{el.text}</span>
                                <br></br>
                            </div>
                        )
                    })
                }
            </div>
            <div className="instructionsDiv">
                <div className="instructionsText">
                    <h3>Special Instructions</h3>
                </div>
                <input type="text" value={values.specialInstructions} name="specialInstructions" onChange={onInputChange} placeholder="Anything else you'd like to add?"></input>
            </div>
            <div className="submitDiv">
                <input type="number" name="num" onChange={onInputChange} defaultValue="1" value={values.num}></input>
                <button disabled={disabled}></button>
            </div>
        </form>
    );
}