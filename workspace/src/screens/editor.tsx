import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SunEditor,{ buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

function MyEditor(props: RouteComponentProps){
    const handleChange = (content: string) => {
        console.log(content)
    }

    // useEffect(() => {
        
    // })
    return(
        
        <SunEditor setOptions={{
            buttonList:buttonList.complex,
        }
        } 
        onChange={handleChange} />
    )
}
export default MyEditor