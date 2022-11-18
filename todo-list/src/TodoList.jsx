import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity() {
        setlistData([...listData, activity])
        console.log(listData)
        setActivity("");
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setlistData(updatedListData);
    }
    return (
        <>
            <div className='container'>
                <div className='header'>TODO LIST</div>
                <input className='add-activity' type="text" placeholder='Add Activity' value={activity} onChange={(e) => {
                    setActivity(e.target.value)
                }}></input>
                <button onClick={addActivity}>Add</button>
                <p className='list-heading'>Here is your</p>
                {listData != [] && listData.map((data, i) => {
                    return (
                        <div className='list' key={i}>
                            <div className='listData'>{data}</div>
                            <div className='btn'><button onClick={() => removeActivity(i)}>Remove</button></div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default TodoList;