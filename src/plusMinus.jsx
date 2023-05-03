import React from "react"

function quantityValue(){
    const [quantity, setQuantity] = React.useState(0)
    const [message, setMessage] = React.useState('')
    function minusValue(){
        if(quantity > 0){
            setQuantity(quantity - 1)
            setMessage(" ")
        }else{
            setMessage("Add quantity ")
        }
    }

    function plusValue(){
        if(quantity < 10){
            setQuantity(quantity + 1)
            setMessage(" ")
        }else{
            setMessage("Maximum quantity is 10")
        }
    }
    return(
        <div className="flex flex-col gap-3">
            <div className="text-center text-black font-[600] text-[60px] drop-shadow-xl">{quantity}</div>
            <div className="text-center text-[#be123c]">{message}</div>
            <div className="flex gap-14">
                <button onClick={minusValue} className="btn btn-primary drop-shadow-xl w-[50px] text-white text-lg">-</button>
                <button onClick={plusValue} className="btn btn-primary drop-shadow-xl w-[50px] text-white text-lg">+</button>
            </div>
        </div>
    )
}

export default quantityValue