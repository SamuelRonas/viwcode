import { LanguageProvider } from './Language/LanguegeContex';
import { ThemeProvider } from './/Theme/ThemeContext';
import { ImageContext, ImageProvider } from './image/imageContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (

    <ImageProvider >
          <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
    </ImageProvider>

  
  );
}