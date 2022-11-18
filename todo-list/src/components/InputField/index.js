import React from 'react'
import "./inputField.css"

function InputField({ todoVal, settodoVal }) {

    return (

        <input className='add-activity' type="text" placeholder='Add Activity' value={todoVal} onChange={(e) => settodoVal(e.target.value)} />

    )
}

export default InputField;