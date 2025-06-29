// import { useState } from 'react'
// import { InputBox } from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'

// function App() {

//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   // Fetch the conversion rates using the custom hook
//   const currencyInfo = useCurrencyInfo(from)

//   // Extract currency names from the response object (e.g., "inr", "eur")
//   const options = Object.keys(currencyInfo)

//   // Function to swap "from" and "to" values and amounts
//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }

//   // Function to convert based on selected "to" currency and current amount
//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//   // UI RENDERING
//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       // Background image styling
//       // style={{
//       //   backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       // }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault(); // Prevent form reload
//               convert(); // Call conversion logic
//             }}
//           >
//             {/* FROM INPUT BOX */}
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount} // current amount
//                 currencyOptions={options} // dropdown currencies
//                 onCurrencyChange={(currency) => setFrom(currency)} // set 'from' currency
//                 selectCurrency={from} // selected value in dropdown
//                 onAmountChange={(amount) => setAmount(amount)} // amount input update
//               />
//             </div>

//             {/* SWAP BUTTON */}
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap} // Trigger swap
//               >
//                 swap
//               </button>
//             </div>

//             {/* TO INPUT BOX */}
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount} // calculated amount
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setTo(currency)} // update 'to' currency
//                 selectCurrency={to} // ❗ fixed here from `from` to `to`
//                 amountDisable // disables editing the converted amount
//               />
//             </div>

//             {/* CONVERT BUTTON */}
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App



import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (!currencyInfo[to]) {
      alert("Currency data is still loading.");
      return;
    }

    if (amount < 0) {
      alert("Amount cannot be negative!");
      return;
    }

    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5 my-2">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
