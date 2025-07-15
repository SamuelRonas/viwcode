
import { toPng } from "html-to-image";
import { useImage } from "../../../contexts/image/imageContext";


export function ExportButton() {

    const snippetRef = useImage();

    const imageExport = async () => {

        



        if (snippetRef.image.current === null) return;

        const dataUrl = await toPng(snippetRef.image.current);
        const link = document.createElement('a');
        link.download = 'meu-snippet.png';
        link.href = dataUrl;
        link.click();

    }

    return (
        <button className='exportar' onClick={imageExport}>Exportar</button>
    )


}