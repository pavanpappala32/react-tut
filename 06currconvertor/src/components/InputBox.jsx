import React, { useId } from 'react'

// Destructuring props received from App.jsx
function InputBox({
  label,                  // Label for the input section ("From" or "To")
  amount,                 // Current amount shown in input box
  onAmountChange,         // Callback to update amount when user types
  onCurrencyChange,       // Callback when currency dropdown changes
  currencyOptions = [],   // List of all currencies
  selectCurrency = "usd", // Default selected currency
  amountDisable = false,  // Whether to disable amount input
  currencyDisable = false,// Whether to disable currency dropdown
  className = "",         // Additional Tailwind classes
}) {
  // Generates a unique ID for input accessibility
  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* LEFT SIDE: Amount Input */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          min="0"
          placeholder="Amount"
          disabled={amountDisable} // disables if true
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* RIGHT SIDE: Currency Dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable} // disables dropdown if true
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
