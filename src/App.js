import React, { useState, useEffect } from 'react'
import NavigationMenu from "./components/navigation-menu/NavigationMenu"
import Header from "./components/header/Header"
import Home from "./pages/Home"

function App() {
  // State
  const [widthScreen, setWidthScreen] =  useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState('')
  const [marginLeft, setMarginLeft] = useState('ml-[295px]')
  const [paddingRight, setPaddingRight] = useState('pr-[295px]')
  const [showHidePage, setShowHidePage] = useState('')

  // Method
  const handleShowHideMenu = (value) => {
    if(showMenu === 'hidden') {
      widthScreen < 1024 ? setShowHidePage('hidden') : setShowHidePage('block') 
      setShowMenu('block')
      setMarginLeft('ml-[295px]')
      setPaddingRight('pr-[295px]')
    } else {
      setShowMenu('hidden')
      setMarginLeft('ml-[0px]')
      setPaddingRight('pr-[0px]')
    }
  }
  const handleHideMenu = (value) => {
    setShowMenu('hidden')
    setShowHidePage('block')
    setMarginLeft('ml-[0px]')
    setPaddingRight('pr-[295px]')
  }

  // UseEffect
  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(()=> {
    if(widthScreen < 1024) {
      setShowMenu('hidden')
      setMarginLeft('ml-[0px]')
      setPaddingRight('pr-[0px]')
    } else {
      setShowMenu('block')
      setMarginLeft('ml-[295px]')
      setPaddingRight('pr-[295px]')
    }
  },[widthScreen])

  return (
    <div className="App">
      <div className={`fixed top-0 ${showMenu}`}>
        <NavigationMenu hideNavigationMenu={ handleHideMenu } />
      </div>
      <div className={`relative ${marginLeft} ${showHidePage}`}>
        <div className={`fixed top-0 z-10 w-full ${paddingRight}`}>
          <Header openCloseMenu={ handleShowHideMenu } />
        </div>
        <Home />
      </div>
    </div>
  )
}

export default App
