import { useEffect, useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [Length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  useEffect(() => {
    let pas = "";
    let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (numAllowed) string += "1234567890";
    if (charAllowed) string += "!@#$%^&*()";
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      // console.log(char);
      pas += string.charAt(char);
    }
    setPassword(pas);
  }, [Length, numAllowed, charAllowed]);
const copy=()=>{
  window.navigator.clipboard.writeText(Password);
  toast.success('Password Copied');
}
  return (
  <>
  
  <div>
      <Toaster />
    </div>
    <div className="main">
      <h1 className="heading">Password Generator</h1>
      <div className="password">
        <input type="text" value={Password} placeholder="password" readOnly />
        <button
        onClick={copy}
        >Copy</button>
      </div>
      <div className="second">
        <div className="range">
          <input
            type="range"
            id="range"
            max={80}
            min={8}
            value={Length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {Length}</label>
        </div>
        <div className="numcheak">
          <input
            type="checkbox"
            id="num"
            defaultChecked={numAllowed}
            onChange={(e) => {
              setnumAllowed((cheak) => !cheak);
            }}
          />
          <label htmlFor="num">Numbers</label>
        </div>
        <div className="charCheak">
          <input
            type="checkbox"
            id="char"
            defaultChecked={charAllowed}
            onChange={(e) => {
              setcharAllowed((cheak) => !cheak);
            }}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
