import { useTema } from '../../context/ThemeContext'
import './toolbar.css'


export function ToolBar() {

    const {setTema} = useTema();
    return (
        <div className="backgroundToolBar">
            <div className="temas">
                <button className="temaVsCode" onClick={() => setTema('codeTemaVscode')}></button>
                <button className='temaApple' onClick={() => setTema('codeTemaApple')}></button>
            </div>
            
            <button className='linguagem'>Selecione sua Linguagem</button>
            <button className='exportar'>Exportar</button>

        </div>
    )
}