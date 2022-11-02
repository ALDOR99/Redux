import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Buttons } from './components'
import { Counter } from './components'

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Buttons />
    </Provider>
  )
}

export default App
