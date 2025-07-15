import { createContext, useContext, useRef, type ReactNode, type RefObject } from 'react';


type ImageType = {
    image: RefObject<HTMLDivElement | null>; 
}


export const ImageContext = createContext<ImageType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const image = useRef<HTMLDivElement>(null);

  return (
    <ImageContext.Provider value={{ image }}>
      {children}
    </ImageContext.Provider>
  );
}
export function useImage() {
  const context = useContext(ImageContext);
  if (!context) throw new Error('useImage deve ser usado dentro de ImageProvider');
  return context;
}

