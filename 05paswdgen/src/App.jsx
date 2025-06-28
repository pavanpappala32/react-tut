import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State to store the length of the password (default: 8)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")



  // useRef to access the password input DOM element
  const passwordRef = useRef(null)

  // useCallback to memoize password generator function.
  // This function only changes when length, numberAllowed, or charAllowed change.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // base characters

    // Append numbers if allowed
    if (numberAllowed) str += "0123456789"

    // Append special characters if allowed
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    // Loop to randomly pick 'length' number of characters from the string
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // get a random index
      pass += str.charAt(char) // add the character at that index to the password
    }

    // Set the generated password to state
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) // dependencies




  // Function to copy password to clipboard when button is clicked
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // select the text in the input field
    passwordRef.current?.setSelectionRange(0, 999) // optional: select full range
    window.navigator.clipboard.writeText(password) // write to clipboard
  }, [password]) // re-created only when password changes

  
  
  // useEffect to call passwordGenerator when any of its dependencies change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  

  
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>

      {/* Password display and copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} // associate the input with the ref
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
        </button>
      </div>





      {/* Controls: password length, include numbers, include characters */}
      <div className='flex text-sm gap-x-2'>

        {/* Length Slider */}
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} // update length
          />
          <label>Length: {length}</label>
        </div>






        {/* Checkbox to toggle numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)} // toggle value
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>





        {/* Checkbox to toggle special characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)} // toggle value
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
