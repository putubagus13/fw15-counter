import React from "react"
import quantityValue from "./plusMinus"

function App(){
    
    return(
        <div className="flex h-screen justify-center items-center">
            <div className="flex justify-center items-center h-[500px] w-[500px] bg-secondary rounded-[30px] drop-shadow-xl">
            <quantityValue/>
            </div> 
        </div>
    )
}

export default App