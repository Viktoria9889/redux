import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../Components/Input'
import ResultInput from '../../Components/ResultInput'


// actions
import { setTitle } from '../../actions/page'

function DashboardPage() {

  const title = 'Dashboard'
  const dispatch = useDispatch()

  useEffect(() => {
    setTitle(title, dispatch)
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <Input />
      <ResultInput />
    </>
  );
}


export default DashboardPage
