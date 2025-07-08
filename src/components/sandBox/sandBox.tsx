import { useEffect } from 'react';
import './sandBox.css';
import { useTema } from '../../contexts/Theme/ThemeContext';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { useLang } from '../../contexts/Language/LanguegeContex';




export function SandBox() {

  const { tema } = useTema();
      const {lang} = useLang(); 

  useEffect(() => {
    const resizable = document.getElementById("resizable");
    const resizer = resizable?.querySelector(".resizer");
    const textarea = document.getElementById('input') as HTMLTextAreaElement;
    const code = document.getElementById('highlighted') as HTMLElement;


    const handleInput = () => {
      code.removeAttribute('data-highlighted');
      const text = textarea.value;
      code.textContent = text;
      code.className = 'hljs language-' + lang;
      console.log(lang)
      hljs.highlightElement(code);
    };
    textarea?.addEventListener('input', handleInput);



    if (!resizable || !resizer) return;

    const onMouseDown = (e: Event) => {
      e.preventDefault();
      const mouseEvent = e as MouseEvent;

      const startX = mouseEvent.clientX;
      const startY = mouseEvent.clientY;
      const startWidth = parseInt(getComputedStyle(resizable).width, 10);
      const startHeight = parseInt(getComputedStyle(resizable).height, 10);

      const doDrag = (e: MouseEvent) => {
        const resizeX = startWidth + e.clientX - startX;
        const resizeY = startHeight + e.clientY - startY;
        resizeX > 400 ? resizable.style.width = resizeX + 'px' : stopDrag;
        resizeY > 200 ? resizable.style.height = resizeY + 'px' : stopDrag;
      };

      const stopDrag = () => {
        document.documentElement.removeEventListener("mousemove", doDrag);
        document.documentElement.removeEventListener("mouseup", stopDrag);
      };

      document.documentElement.addEventListener("mousemove", doDrag);
      document.documentElement.addEventListener("mouseup", stopDrag);
    };

    resizer.addEventListener("mousedown", onMouseDown);

    return () => {
      textarea?.removeEventListener('input', handleInput);
      resizer.removeEventListener("mousedown", onMouseDown);
    };
  }, [lang]);

  return (
    <div className="editor-wrapper">
      <div className="background" id="resizable">
        <div className={tema}>
          <div className="InterfaceCode">
            <div className="icon"></div>
          </div>

          <pre>
            <code id="highlighted" className="hljs"></code>
          </pre>


          <textarea
            id="input"
            spellCheck="false"
            placeholder="Digite seu código aqui…"
          ></textarea>
        </div>

        <div className="resizer"></div>
      </div>
    </div>
  );

}
