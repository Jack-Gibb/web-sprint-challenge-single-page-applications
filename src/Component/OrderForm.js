import React, { useState } from 'react';

const OrderForm = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState({
        pig: false,
        cow: false,
        vegetable: false, 
        fungus: false,
        fruit: false,
    });
    const [specialInstructions, setSpecialInstructions] = useState('');


    const chooseName = (e) => {

        const newName = e.target.value;
        setName(newName);

        if (newName.length < 2) {
            setNameError("name must be at least 2 characters");
        } else {
            setNameError('');
        }
    };

    const chooseToppings = (e) => {

        const { name, checked } = e.target;
        setToppings((prevToppings) => ({
            ...prevToppings,
            [name]: checked,
        }));
    };
    
    const chooseSize = (e) => {

        const newSize = e.target.value;
        setSize(newSize);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Name:', name);
        console.log('Size:', size);
        console.log('Toppings:', toppings);
        console.log('Special Instructions:', specialInstructions);
    };

    return (
        <div>
            <h2>Pizza Smash Order</h2>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name:</label>
                <input 
                type="text"
                id="name-input"
                value={name}
                onChange={chooseName}
                />
                {nameError && <div>{nameError}</div>}

                <label htmlFor="size-dropdown">Size:</label>
                <select id="size=dropdown" value={size} onChange={chooseSize}>
                    <option value="bite-sized">Bite Sized</option>
                    <option value="better">Better</option>
                    <option value="stuffed">Stuffed</option>
                </select>

                <label>Toppings</label>
                <div>
                <label htmlFor="pig">Pig</label>
                <input 
                type="checkbox"
                name="pig"
                checked={toppings.pig}
                onChange={chooseToppings}
                />
                </div>

                <div>
                <label htmlFor="cow">Cow</label>
                <input 
                type="checkbox"
                name="cow"
                checked={toppings.cow}
                onChange={chooseToppings}
                />
                </div>

                <div>
                <label htmlFor="vegetable">Vegetable</label>
                <input 
                type="checkbox"
                name="vegetable"
                checked={toppings.vegetable}
                onChange={chooseToppings}
                />
                </div>

                <div>
                <label htmlFor="fungus">Fungus</label>
                <input 
                type="checkbox"
                name="fungus"
                checked={toppings.fungus}
                onChange={chooseToppings}
                />
                </div>

                <div>
                <label htmlFor="fruit">Fruit</label>
                <input 
                type="checkbox"
                name="fruit"
                checked={toppings.fruit}
                onChange={chooseToppings}
                />
                </div>

                <label htmlFor="special-text">Special Instructions:</label>
                <textarea 
                id="special-text"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                />

                <button type="submit" id="order-button">Add to the Order Already!</button>
                
            </form>
        </div>
    );
};

export default OrderForm;