import './styles/components/app.sass'

import SideBar from "./components/SideBar"
import MainContent from './components/mainContent'
import StartContainer from './components/StartContainer'
import './styles/name.css'
import EndContainer from './components/EndContainer'
function App() {

  return (
    <div id="portfolio"> 
      <StartContainer/>
      <MainContent/>
      <SideBar />
      <EndContainer/>
    </div>
  )
}

export default App
