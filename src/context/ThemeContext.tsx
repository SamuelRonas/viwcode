// ThemeContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

type ThemeContextType = {
  tema: string;
  setTema: (tema: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState('codeTemaApple');

  return (
    <ThemeContext.Provider value={{ tema, setTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTema() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTema deve ser usado dentro de ThemeProvider');
  return context;
}
