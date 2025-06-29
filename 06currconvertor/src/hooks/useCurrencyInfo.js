import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  // State to hold fetched exchange rates
  const [data, setData] = useState({})

  // Fetch whenever `currency` (base currency) changes
  useEffect(() => {
    // Fetch exchange rates from API for the given base currency
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency])) // Set only the exchange rates object for the currency

    // (optional) log to debug in console
    // console.log(data);
  }, [currency]) // dependency: re-run only if `currency` changes

  return data // Return rates like {inr: 83.5, eur: 0.91, ...}
}

export default useCurrencyInfo
