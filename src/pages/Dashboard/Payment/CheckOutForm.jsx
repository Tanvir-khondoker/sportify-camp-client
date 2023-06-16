import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// import './checkoutFrom.css'


const CheckOutForm = ({cart,price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('');
  const[clientSecret, setClientSecret] = useState('');
  const[processing, setProcessing] = useState(false);
  const[transactionId, setTransactionId] = useState('');
  
  
  useEffect(()=>{
      if(price>0){
        axiosSecure.post('/create-payment-intent',{price})
     .then(res =>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret);
     })
      }
  }, [price, axiosSecure])
  
  
  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) {
    return;
  }

  const card = elements.getElement(CardElement);
  if (card === null) {
    return;
  }

  setProcessing(true);
  const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card,
      billing_details: {
        email: user?.email || 'unknown',
        name: user?.displayName || 'anonymous',
      },
    },
  });

  if (error) {
    console.log('Payment confirmation error:', error);
    setCardError(error.message);
    setProcessing(false);
    return;
  }

  console.log('Payment intent:', paymentIntent);

  if (paymentIntent.status === 'succeeded') {
    setTransactionId(paymentIntent.id);

    const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      date: new Date(),
      quantity: cart.length,
      cartItems: cart.map((item) => item._id),
      CoursesItems: cart.map((item) => item.courseId),
      orderStatus: 'service pending',
      itemNames: cart.map((item) => item.name),
    };

    axiosSecure
      .post('/payments', payment)
      .then((res) => {
        console.log('Payment saved:', res.data);
        if (res.data.result.insertedId) {
          // Delete cart items here
          axiosSecure
            .delete('/cart', { data: { cartItems: cart.map((item) => item._id) } })
            .then((res) => {
              console.log('Cart items deleted:', res.data);
              // Perform any additional actions after successful payment and cart deletion
            })
            .catch((error) => {
              console.error('Error deleting cart items:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error saving payment:', error);
      });
  }

  setProcessing(false);
};

  return (
    <>
    <form className="w-[700px]  mx-auto mt-8" onSubmit={handleSubmit}>
      <CardElement
  options={{
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }}
/>
      <button
        className="btn btn-outline btn-primary btn-sm mt-4"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600">{cardError}</p>}
    {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckOutForm;
