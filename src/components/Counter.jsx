import React from "react"

function Counter(props){
    const [quantity, setQuantity] = React.useState(0)
    const [message, setMessage] = React.useState('')
    function minusValue(){
        if(quantity > 0){
            setQuantity(quantity - 1)
            setMessage(" ")
        }else{
            setMessage("Add quantity")
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
    const {onChangeNumber} = props

    React.useEffect(()=>{
        function changeNumber(num){
            onChangeNumber(num)
        }
        changeNumber(quantity)
    },[quantity, onChangeNumber])
    return(
        <>
            <div className="text-center text-[#be123c]">{message}</div>
            <div className="flex gap-14">
                <button onClick={minusValue} className="btn btn-primary drop-shadow-xl w-[50px] text-white text-lg">-</button>
                <button onClick={plusValue} className="btn btn-primary drop-shadow-xl w-[50px] text-white text-lg">+</button>
            </div>
        </>
    )
}
Counter.propTypes = {
    onChangeNumber: "function"
}

export default Counter