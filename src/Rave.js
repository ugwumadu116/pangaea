// import React, {useState} from 'react';
// // import { useFlutterwave } from 'flutterwave-v3-react';

// export default function App() {
//   const [amount , setAmount] = useState("")
  
//   const config = {
//     public_key: process.env.REACT_APP_PUBLIC_KEY,
//     tx_ref: Date.now(),
//     amount: amount,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'ugwumadi116@gmail.com',
//       phonenumber: '07064586146',
//       name: 'joel ugwumadu',
//     },
//     customizations: {
//       title: 'my Payment Title',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//     <div className="App">
//       <div className="form">
//       <input placeholder="Please enter amount" type="number" name="amount" value={amount} onChange={(e) => {
//        const val = e.target.value
//        setAmount(Number(val))
//      }}/>
//       <button
//         onClick={() => {
//           handleFlutterPayment({
//             callback: (response) => {
//               console.log(response);
//             },
//             onClose: () => {},
//           });
//         }}
//       >
//         Pay {amount}
//       </button>

//       </div>
      
     
//     </div>
//   );
// }