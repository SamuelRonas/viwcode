
import './App.css'
import { SandBox } from './components/sandBox/sandBox'
import { ToolBar } from './components/toolBar/toolbar'
import {AppProviders} from './contexts/globalContext'

function App() {


  return (
    <>
      <AppProviders>
        <SandBox />
        <ToolBar />
      </AppProviders>
    </>

  )
}

export default App
