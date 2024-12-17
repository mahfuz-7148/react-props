import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicData from './pages/DynamicData'
import Products from './pages/Products'

function App() {

  // const products = {
  //   name: 'Samsung',
  //   price: 20000
  // }
  // const products = ['samsung', 'iphone', 'pixel9', 'realme']
  const products = [
    { name: 'Samsung', price: 20000 },
    { name: 'Iphone', price: 30000 },
    { name: 'Pixel9', price: 50000 },
  ]

  const alert = () => {
    window.alert('alertt')
  }

  return (
    // <div className='grid grid-cols-2'>
    //   <DynamicData name='mahfuz' age='25' />
    //   <DynamicData name='rahman' age='26' />
    //   <DynamicData name='shanto' age='27' />
    //   <DynamicData name='david' age='23' />
    // </div>

    // <div>
    //   <Products 
    //    products = {products}
    //   />
    // </div>

    <div>
      { products.map(product => <Products 
        product = {product}
        alert = {alert}
      />)}
    </div>
  )
}

export default App
