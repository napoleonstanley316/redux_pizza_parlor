
import Info from '../Info/Info.jsx';
import { useSelector } from 'react-redux';


function Checkout() {
  const infoReducer = useSelector((state) => state.infoReducer);


  const infoReducer = useSelector((state) => state.infoReducer);
  const pizzaReducer = useSelector((state) => state.pizzaReducer);

  const handleCheckout = () => {
      console.log('handleCheckout clicked!');
  }

  console.log("In checkout");

  return (
    <section>
      <h2>Order Information</h2>
      <p>{infoReducer.customer_name}</p>
      <p>{infoReducer.street_address}</p>
      <p>{infoReducer.city}</p>
      <p>{infoReducer.zip}</p>
      <p>{infoReducer.type}</p>
      <p>{infoReducer.total}</p>
      <p>{infoReducer.time}</p>
      <table>

        <tbody>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
          <tr>
              <td>{pizzaReducer.name}</td>
              <td>{pizzaReducer.price}</td>
          </tr>
          <button onClick={handleCheckout}>Checkout</button>
        </tbody>


      </table>
    </section>
  );
}

export default Checkout;
