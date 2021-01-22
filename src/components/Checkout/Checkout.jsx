import Info from '../Info/Info.jsx';
import {useSelector} from 'react-redux'


function Checkout() {

    const infoReducer = useSelector(state => state.infoReducer)

    const [checkoutList, setCheckoutList] = useState([]);
  
    
    const handleCheckout = () => {
      console.log('handleCheckout clicked!');
      axios({
        method: 'POST',
        url: '/api/order'
      }).then((response) =>{
        console.log('sending order details', response);
        setCheckoutList(infoReducer.data)
          console.log(checkoutList);

      }).catch(function (error) {
        console.log('Error on get:', error);
      });
  }

    
    console.log('In checkout');
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
            
        </tbody>
      </table>
    </section>

)


}


export default Info;
