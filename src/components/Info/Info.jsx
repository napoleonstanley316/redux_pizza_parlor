import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Info(){
    // setting up state to hold variables from user
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [zip, setZip] = useState('');

    const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = event =>{
      event.preventDefault();

      console.log(`Adding Customer Information`, {name, address, city, zip});

      dispatch({type: 'SET_NEW_INFO', payload:{ name, address, city, zip, value}})

      history.push('/checkout')
  }

    return(
        // input fields for the user to enter data which can be used for delivery
        <section>
        <header>
            <h1>Prime Pizza</h1>
            {/* show total price of items selected by the customer */}
        </header>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <input 
                required
                placeholder='Name'
                value={}
                onChange={() =>setName(event.target.value)}></input>

                <input 
                required
                placeholder='StreetAddress'
                value={}
                onChange={() =>setAddress(event.target.value)}></input>

                <input 
                required
                placeholder='City'
                value={}
                onChange={() =>setCity(event.target.value)}></input>

                <input 
                required
                placeholder='Zip code'
                value={}
                onChange={() =>setZip(event.target.value)}></input>

                <label for="DorT"> Choose a reception method:</label>
                <select name="DorT" id = "DorT">
                    <option value ="delivery">Delivery</option>
                    <option value="pickup">Pickup</option>
                </select>

                <button type='submit'>
                    Next
                </button>
                
            </form>
        </section>
    );
}

export default Info;