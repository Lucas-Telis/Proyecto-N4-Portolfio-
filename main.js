import './style.css'
import Header from './components/Header/Header.js'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
`
}

render()
