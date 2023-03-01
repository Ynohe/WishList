import "./WishListInput.css"
import {useState} from "react"


const WishListInput = ({addWish}) => {

    const [productName,setProductName]= useState('')

    const handleWish = (e) => {
        if (e.key.toLowerCase() === 'enter'){
            addWish(productName)
            setProductName('')
        }
    }

    return(
        <div className="InputContainer">
            <div className="circleContainer">
                <span className="circle"></span>
            </div>
            <input 
                type="text" 
                className="TextInput" 
                placeholder="Your next wish... "
                value={productName}
                onChange={e => setProductName(e.target.value)}
                onKeyDown={e => handleWish(e)}
                />
        </div>
    )
} 

export {WishListInput}