import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import { MainGooglePage } from './components/MainGooglePage';
import { SearchDetails } from './components/SearchDetails';
import {Provider} from "react-redux"
import {store} from "./Redux/store.js"
import {ShowDetails} from "./components/ShowDetails"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainGooglePage/>} />
        <Route exact path="/search" element={<SearchDetails/>} />
        <Route exact path="/page/:id" element={<ShowDetails/>} />
      </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
