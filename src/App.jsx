import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicData from './pages/DynamicData'

function App() {
  

  return (
    <div className='grid grid-cols-2'>
      <DynamicData name='mahfuz' age='25' />
      <DynamicData name='rahman' age='26' />
      <DynamicData name='shanto' age='27' />
      <DynamicData name='david' age='23' />
    </div>
  )
}

export default App
