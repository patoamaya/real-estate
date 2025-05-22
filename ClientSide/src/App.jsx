import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FooterContainer from './components/Footer/FooterContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import HomeContainer from './components/Home/HomeContainer'
import ListContainer from './components/List/ListContainer'
import DetailContainer from './components/Detail/DetailContainer'
import SearchContextProvider from './components/context/SearchContext'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SearchContextProvider>
          <Routes>
            <Route element={<HeaderContainer/>}>
            <Route element={<FooterContainer/>}>
              <Route path='/' element={<HomeContainer/>}/>
              <Route path='/q' element={<ListContainer/>}/>
              <Route path='/detail/:id' element={<DetailContainer/>}/>
            </Route>
            </Route>
          </Routes>
        </SearchContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App