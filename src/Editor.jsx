import React, { useContext, useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {Controlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import './code.css'
import { codeContext } from './Code';


const Editor = ({name,span,colour,onChange,value}) => {

  function handelChange(editor, data, value){
    onChange(value);
  }

  const[open, setOpen] = useState(true);
  


  return (
    <div id='box' style={open ? null : {width:"10%"} }>
        <div id="upper">
            <div className="left">
                <span style={{backgroundColor:colour}}>{span}</span>
                <h3>{name}</h3>
            </div>

            <div className="right">
                <KeyboardDoubleArrowLeftIcon
                onClick={()=>{setOpen(!open)}}
                 />
            </div>
        </div>

        <div id="input">
            <CodeMirror
            value={value}
            
            className='controlledEditor'
            options={{
              theme: 'material',
              lineNumbers: true
            }}
            onBeforeChange={handelChange}
             />
        </div>



    </div>
    
  )
}

export default Editor
