
import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (


   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
         
   
   <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full" > 
      <button
      onClick={() => setColor("red")}
      className="outline-none px-5 shadow-lg  bg-red-600 text-white rounded-full py-1"> REd </button>

       <button
       onClick={() => setColor("green")}
      className="outline-none px-5 shadow-lg  bg-green-600 text-white rounded-full py-1"> green </button>


       <button 
       onClick={() => setColor("blue")}
       className="outline-none px-5 shadow-lg  bg-blue-900 text-white rounded-full py-1"> blue </button>


      < button 
       onClick={() => setColor("pink")}
       className="outline-none px-5 shadow-lg  bg-pink-900 text-white rounded-full py-1"> blue </button>


       
      < button 
       onClick={() => setColor("black")}
       className="outline-none px-5 shadow-lg  bg-black text-white rounded-full py-1"> blue </button>
   
    
      < button 
       onClick={() => setColor("skyblue")}
       className="outline-none px-5 shadow-lg  bg-sky-700 text-white rounded-full py-1"> blue </button>
       
      < button 
       onClick={() => setColor("yellow")}
       className="outline-none px-5 shadow-lg  bg-yellow-700 text-white rounded-full py-1"> blue </button>
       


    </div>
   </div>


   </div>
  )
}

export default App
