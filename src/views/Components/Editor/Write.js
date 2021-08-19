import React, {useEffect, useRef, useState} from "react";
import {Provider,useSelector,useDispatch} from "react-redux";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "ckeditor5-custom-build/build/ckeditor";

export default function Write() {
   
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [flag, setFlag] = useState(false);
    const inputRef = useRef();
    
    
    // useEffect(()=>{
    //     // 저장 후 목록으로 이동
       
    //         history.push('/app/list');
    //     }
    // },[]);
    
    
    const handleList = () => {
        history.push('/app/list');
    }
    
    const handleReset = () => {
        
        setContent("");
    }
    
    const handleSave = () => {
        if (!isEmpty(title) && !isEmpty(content)) {

        }else {
            setFlag(true);
        }
    }
    
    const handleEditorChange = (event, editor) => {
        setContent(editor.getData());
    }
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    
    const handleClose = () => {
        setFlag(false);
    }
 
    
    
    return (

      <div className="Editor">

        <div style={{width: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{width: "60%", marginBottom: "10px"}}>
                    <input type="text" className="form-control" id="title" onChange={handleTitleChange} ref={inputRef}/>
                </div>
                <form className="form-inline">
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>작성하기</button>{' '}
                        <button type="button" className="btn btn-warning" onClick={handleReset}>리셋하기</button>{' '}
                        <button type="button" className="btn btn-normal" onClick={handleList}>리스트보기</button>
                    </div>
                </form>
            </div>
            
          <CKEditor
              editor={ Editor }
              
              config={{
                placeholder: "기모치맨!",
                image: {
                    styles: ['alignLeft', 'alignCenter', 'alignRight'],
                    resizeUnit: 'px',
                    resizeOptions: [
                    {
                        name: 'resizeImage:original',
                        value: null,
                        icon: 'original'
                    },
                    {
                        name: 'resizeImage:50',
                        value: '50',
                        icon: 'medium'
                    },
                    {
                        name: 'resizeImage:75',
                        value: '75',
                        icon: 'large'
                    }
                ]},
             
                
                
                toolbar: ['heading','Title', 'bold', 'italic', '|',
                'bulletedList', 'numberedList','TodoList','Underline', 'blockquote', 'link', 'code', 'codeblock', '|',
                'imageupload','MediaEmbed', 'imagestyle:alignLeft', 'imagestyle:alignCenter', 'imagestyle:alignRight', '|',
                'undo', 'redo','resizeImage:50','resizeImage:75','resizeImage:original','FontColor','FontFamily','FontSize','FontBackgroundColor',
                'Table','TableToolbar','TextTransformation'
                ],
                
               
                 simpleUpload: {
                    uploadUrl: 'http://localhost:8081/api/image/',
                }
                
              }}
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
              } }
              onChange={handleEditorChange}
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
              onReady={(editor) => {
                console.log(editor.ui.componentFactory);
                console.log("시작한다", editor);
              }}
          />
          </div>
      </div>
    );
  }
