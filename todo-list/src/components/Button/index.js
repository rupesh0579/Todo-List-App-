import React from 'react'
import "./button.css"


const Button = ({ handleOnclick }) => {


    return (
        <div>
            <button onClick={handleOnclick}>Add</button>
        </div>
    )
}

export default Button;