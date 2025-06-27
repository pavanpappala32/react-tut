// import { useState } from "react";



// export default function Tempconverter(){
//     const [celsius,setCelsius]=useState("");
//     const [fahrenheit, setFahrenheit] = useState("");

//     const onCelsiusChange=(value)=>{
//         setCelsius(value);
//         setFahrenheit(value === "" ? "" : (value * 9) / 5 + 32);
//     };

//      const onFahrenheitChange = (value) => {
//     setFahrenheit(value);
//     setCelsius(value === "" ? "" : ((value - 32) * 5) / 9);
//   };

//     return(
//         <div className="tc-card">
//             <div className="tc-group">
//                 <label htmlFor="celsius">Celsius(C)</label>
//                 <input
//                     id="celsius"
//                     type="number"
//                     value={celsius}
//                     placeholder="Enter °C"
//                     onChange={(e) => onCelsiusChange(e.target.value)}/>
//             </div>
//         <div className="tc-group">
//         <label htmlFor="fahrenheit">Fahrenheit (°F)</label>
//         <input
//           id="fahrenheit"
//           type="number"
//           value={fahrenheit}
//           placeholder="Enter °F"
//           onChange={(e) => onFahrenheitChange(e.target.value)}
//         />
//       </div>    
//         </div>
//     )
// }





import { useState } from "react";
import "./App.css";

export default function TempConverter() {
  const [celsius, setCelsius] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Convert Celsius to F and K
  const fahrenheit = celsius === "" ? "" : (celsius * 9) / 5 + 32;
  const kelvin     = celsius === "" ? "" : parseFloat(celsius) + 273.15;

  // Convert input back from F or K to C
  const onFahrenheitChange = (value) => {
    setCelsius(value === "" ? "" : ((value - 32) * 5) / 9);
  };

  const onKelvinChange = (value) => {
    setCelsius(value === "" ? "" : value - 273.15);
  };

  return (
    <div className={`converter-card ${darkMode ? "dark" : ""}`}>
      <div className="card-header">
        <h2>🌡️ Temperature Converter</h2>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="input-group">
        <label>Celsius (°C)</label>
        <input
          type="number"
          value={celsius}
          placeholder="Enter °C"
          onChange={(e) => setCelsius(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Fahrenheit (°F)</label>
        <input
          type="number"
          value={fahrenheit}
          placeholder="Enter °F"
          onChange={(e) => onFahrenheitChange(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Kelvin (K)</label>
        <input
          type="number"
          value={kelvin}
          placeholder="Enter K"
          onChange={(e) => onKelvinChange(e.target.value)}
        />
      </div>
    </div>
  );
}

