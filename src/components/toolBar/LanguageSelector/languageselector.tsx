import { useState, useRef, useEffect } from 'react';
import './languageselector.css'

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let linguagem = 'Selecione sua linguagem'

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-wrapper">
      {open && (
        <div className="dropdown" ref={dropdownRef} style={{
          width: buttonRef.current?.offsetWidth,
        }}>
          <div className="option">TypeScript</div>
          <div className="option">Python</div>
          <div className="option">JavaScript</div>
        </div>
      )}
      <button
        ref={buttonRef}
        className="button-language"
        onClick={() => setOpen(!open)}
      >
        {linguagem}
      </button>
    </div>
  );
}
