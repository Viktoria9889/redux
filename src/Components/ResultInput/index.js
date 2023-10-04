import { useSelector } from 'react-redux'

function ResultInput() {

    const result = useSelector((state) => state.input.data)
    console.log('result:', result)

    return (
        <div>
            {result}
        </div>
    )
}

export default ResultInput