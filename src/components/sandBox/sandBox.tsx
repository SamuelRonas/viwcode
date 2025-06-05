import { useEffect, useState } from 'react';
import './sandBox.css';
import { useTema } from '../../context/ThemeContext';





export function SandBox() {

    const {tema} = useTema();

  useEffect(() => {
    const resizable = document.getElementById("resizable");
    const resizer = resizable?.querySelector(".resizer");

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
        console.log(resizeX)
        resizeX > 400 ?  resizable.style.width = resizeX + 'px' : stopDrag;
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
      resizer.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div className="background" id="resizable">
        <div className={tema}>
            <div className='InterfaceCode'>
                <div className='icon'></div>
            </div>
            <textarea></textarea>
        </div>
        
      <div className="resizer"></div>
    </div>
  );
}
