import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();

  const [menu, setMenu] = useState([]);

  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = () => {
    axios
      .get('/api/pizza')
      .then((response) => {
        console.log(response.data);
        setMenu(response.data);
      })
      .catch((error) => {
        alert('error in getting Pizza List');
        console.log(error);
      });
  }; //end getPizza

  const flipButton = () => {
    setIsAdd(!isAdd);
  }; //end flipButton

  function handleAdd() {
    console.log('clicked Add');
  } //end handleAdd

  function handleDelete() {
    console.log('clicked Delete');
  } //end handleDelete

  function handleNext() {
    console.log('clicked Next');
  } //end handleNext

  return (
    <div>
      {menu.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.image_path} />
          {pizza.name}
          {pizza.description}
          {pizza.price}
          {isAdd ? (
            <button onClick={handleAdd}>ADD</button>
          ) : (
            <button onClick={handleDelete}>REMOVE</button>
          )}
        </div>
      ))}
      {/* <div key={pizza.id}> */}
      {/* {isAdd ? (
          <button onClick={handleAdd}>ADD</button>
        ) : (
          <button onClick={handleDelete}>REMOVE</button>
        )} */}
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

export default Home;
