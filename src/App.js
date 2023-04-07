import NavigationMenu from "./components/navigation-menu/NavigationMenu"
import Header from "./components/header/Header"
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
      <div className="fixed top-0">
        <NavigationMenu />
      </div>
      <div className="relative ml-[295px]">
        <div className="fixed top-0 z-10 w-full pr-[295px]">
          <Header />
        </div>
        <Home />
      </div>
    </div>
  )
}

export default App
