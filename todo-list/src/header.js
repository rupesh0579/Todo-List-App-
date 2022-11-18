import React, { useState } from 'react'
import Button from './components/Button'
import InputField from './components/InputField'
import TodoList from './components/TodoList/TodoList'

const Header = () => {
    const [todoVal, settodoVal] = useState("");
    const [todoList, settodoList] = useState([]);

    function handleInputChange(value) {
        settodoVal(value)
    }


    function handleOnclick() {
        settodoList([...todoList, todoVal])
        console.log(todoVal)
        settodoVal("");

    }

    // function removeItem(i) {
    //     const updatedtodoList = todoList.filter((elem, id) => {

    //     })
    // }
    return (
        <div>
            {/* <input value={todoVal} onChange={(e) => settodoVal(e.target.value)} /> */}
            <InputField settodoVal={handleInputChange} todoVal={todoVal} />
            <Button handleOnclick={handleOnclick} />
            <TodoList todoList={todoList} />

        </div>
    )
}

export default Header;