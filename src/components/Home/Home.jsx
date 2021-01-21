import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

function PizzaList() {

    const dispatch = useDispatch();

    const []

    useEffect(() => {
        getPizza();
    }, []);

    const getPizza = () => {
        axios.get('/pizza')
        .then(response => {
            
            dispatch(action);
        }).catch(error => {
            alert('error in getting Pizza List');
            console.log(error);
        })
    }; //end getPizza



    return (

        const pizzaList = useSelector(store => store.pizzaReducer)

        <div>
            {pizzaList.map((pizza, index) =>)}
            
        </div>


    )
}