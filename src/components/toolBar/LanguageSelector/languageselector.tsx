import React, { useState, useRef, useEffect, type JSX } from 'react';
import './languageselector.css'
import { languages } from './languages';
import { useLang } from '../../../contexts/Language/LanguegeContex';

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {lang, setLang} = useLang();

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
      {
        languages.map((lang, index): React.ReactNode =>   {
          return(<div key={index} className='option' onClick={()=> {setLang(lang)}}>{lang}</div>)
        })
      }
        </div>
      )}
      <button
        ref={buttonRef}
        className="button-language"
        onClick={() => setOpen(!open)}
      >
        {lang}
      </button>
    </div>
  );
}
