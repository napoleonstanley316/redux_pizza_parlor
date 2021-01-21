import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

function PizzaList() {

    const dispatch = useDispatch();

    const [menu, setMenu] = useState([]);

    const [isAdd, setIsAdd] = useState(true);
    

    useEffect(() => {
        getPizza();
    }, []);

    const getPizza = () => {
        axios.get('/pizza')
        .then(response => {
            
           setMenu(response.data);
        }).catch(error => {
            alert('error in getting Pizza List');
            console.log(error);
        })
    }; //end getPizza

    const flipButton = () => {
        setIsAdd(!isAdd);
    }; //end flipButton

    function handleAdd() {
        console.log('clicked Add');
    }; //end handleAdd

    function handleDelete() {
        console.log('clicked Delete');
    }; //end handleDelete

    function handleNext() {
        console.log('clicked Next');
    }; //end handleNext



    return (

        <div>
            {menu.map((pizza) =>
            <div key={pizza.id}>{pizza.image_path}{pizza.name}{pizza.description}{pizza.price}
            </div>
            )}
            <div key={pizza.id}>
                {isAdd ?
                <button
                onClick={handleAdd} >ADD</button>
                :
                <button
                onClick={handleDelete}>REMOVE</button>                
                }
                
            </div>
            <button onClick={}>NEXT</button>
        </div>


    )
}