import { LanguageProvider } from './Language/LanguegeContex';
import { ThemeProvider } from './/Theme/ThemeContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}