
import './App.css'
import { SandBox } from './components/sandBox/sandBox'
import { ToolBar } from './components/toolBar/toolbar'
import { ThemeProvider } from './context/ThemeContext'

function App() {


  return (
    <>
      <ThemeProvider>
        <SandBox />
        <ToolBar />

      </ThemeProvider>

    </>

  )
}

export default App
