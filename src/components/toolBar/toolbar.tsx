import { useTema } from '../../contexts/Theme/ThemeContext'
import { ExportButton } from './ExportButton/exportbutton';
import { LanguageSelector } from './LanguageSelector/languageselector';
import './toolbar.css'


export function ToolBar() {

    const {setTema} = useTema();
    return (
        <div className="backgroundToolBar">
            <div className="temas">
                <button className="temaVsCode" onClick={() => setTema('codeTemaVscode')}></button>
                <button className='temaApple' onClick={() => setTema('codeTemaApple')}></button>
            </div>
            
            <LanguageSelector/>
            <ExportButton/>
            
            

        </div>
    )
}