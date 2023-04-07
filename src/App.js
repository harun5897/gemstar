import React, { useState, useEffect } from 'react'
import NavigationMenu from "./components/navigation-menu/NavigationMenu"
import Header from "./components/header/Header"
import Home from "./pages/Home"

function App() {
  // State
  const [widthScreen, setWidthScreen] =  useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState('')
  const [fullPage, setFullPage] = useState('295')
  const [showHidePage, setShowHidePage] = useState('')

  // Method
  const handleShowHideMenu = (value) => {
    if(showMenu === 'hidden') {
      widthScreen < 1024 ? setShowHidePage('hidden') : setShowHidePage('block') 
      setShowMenu('block')
      setFullPage('295')
    } else {
      setShowMenu('hidden')
      setFullPage('0')
    }
  }
  const handleHideMenu = (value) => {
    setShowMenu('hidden')
    setShowHidePage('block')
    setFullPage('0')
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
      setFullPage('0')
    } else {
      setShowMenu('block')
      setFullPage('295')
    }
  },[widthScreen])

  return (
    <div className="App">
      <div className={`fixed top-0 ${showMenu}`}>
        <NavigationMenu hideNavigationMenu={ handleHideMenu } />
      </div>
      <div className={`relative ml-[${fullPage}px] ${showHidePage}`}>
        <div className={`fixed top-0 z-10 w-full pr-[${fullPage}px]`}>
          <Header openCloseMenu={ handleShowHideMenu } />
        </div>
        <Home />
      </div>
    </div>
  )
}

export default App
