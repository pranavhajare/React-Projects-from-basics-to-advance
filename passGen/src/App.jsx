import { useState, useCallback, useEffect, useRef } from "react"

export default function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  // useRef hook
  const passRef = useRef(null)

  const passGen = useCallback(()=>{
    let passwd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) str += "0123456789";
  if(char) str += "!@#$%^&*()_+{}";
  for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random()* str.length + 1)    
        passwd += str.charAt(char)
  }
  setPass(passwd);
  },[length,number,char,setPass]);

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(pass)
  },
  [pass])

  useEffect(()=>{
    passGen();
  },[length, number, char, passGen])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>


  )
}