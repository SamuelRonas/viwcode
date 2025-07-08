import { createContext, useContext, useState, type ReactNode } from 'react';


type LanguageType = {
    lang: string; 
    setLang: (lang: string) => void;
}


export const LanguageContext = createContext<LanguageType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('typescript');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang deve ser usado dentro de LanguageProvider');
  return context;
}

