import Counter from "./components/Counter"
import React from "react"

function App(){
    const [count, setCount] = React.useState(0)
    
    return(
        <div className="flex h-screen justify-center items-center">
            <div className="flex justify-center items-center h-[500px] w-[500px] bg-secondary rounded-[30px] drop-shadow-xl">
                <div className="flex flex-col gap-3">
                    <div className="text-center text-black font-[600] text-[60px] drop-shadow-xl">{count}</div>
                    <Counter onChangeNumber = {setCount}></Counter>
                </div>
            </div> 
        </div>
    )
}

export default App