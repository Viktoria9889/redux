import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { action } from '../../actions/input'

function Input() {

    const [inputData, setInputData] = useState('')
    const inputValue = (ev) => {
        setInputData(ev.target.value)
        }
    
    const dispatch = useDispatch()
    const handlerClick = () => {
        // const action = {
        //     type: INPUT_SET_DATA,
        //     payload: {data: inputData}
        // }
        dispatch(action(inputData))
    }
    

    return (
        <div>
            <input type='text' name='input' onChange={inputValue}/>
            <button onClick={handlerClick}>Push</button>
        </div>
    )
}

export default Input