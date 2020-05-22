import React, {useState, useEffect} from "react";
import PizzaForm from "./Form";
import {Route, NavLink} from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./validation/formSchema";

const App = () => {
  const initialPizzaList = [];
  const initialFormValues = {
    username: "",
    size: "",
    sauce: "",
    toppings: {
     pepperoni: false,
     sausage: false,
     bacon: false,
     spicyItalianSausage: false,
     onions: false,
     greenPeppers: false,
     blackOlives: false,
     roastedGarlic: false,
     pineapple: false,
     extraCheese: false,
    },
    specialInstructions: "",
  }
  const initialFormErrors = {
    username: "",
    size: "",
    sauce: "",
  }
  const initialDisabled = false;
  
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizzas, setPizzas] = useState(initialPizzaList);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const onInputChange = evt => {
    const {name, value} = evt.target;
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]: ""})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({...formValues, [name]: value});
  }
  
  const postNewPizza = newPizza => {
    axios.post("https://reqres.in/api/pizza", newPizza)
      .then(res => {
        setPizzas([...pizzas, res.data])
        console.log(pizzas);
      })
      .finally(setFormValues(initialFormValues))
  }
  
  const onSubmit = evt => {
    evt.preventDefault()

    const newPizza = {
      username: formValues.username.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
    }
    postNewPizza(newPizza)
  }

  const onCheckboxChange = evt => {
    const {name, checked} = evt.target;
    setFormValues({...formValues, toppings: {...formValues.toppings, [name]: checked}})
  }
  
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
    }, [formValues])

  return (
    <div>
      
      <Route exact path = "/">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="pizzaLink" to="/pizza">Pizza</NavLink>
        </nav>
      </Route>
      <Route path = "/pizza">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="pizzaLink" to="/pizza">Pizza</NavLink>
        </nav>
        <PizzaForm values={formValues} onInputChange={onInputChange} onSubmit={onSubmit} disabled={disabled} errors={formErrors} onCheckboxChange={onCheckboxChange} />
      </Route>
      </div>
  );
};
export default App;
