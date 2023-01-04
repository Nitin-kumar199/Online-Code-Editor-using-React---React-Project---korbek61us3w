import React from 'react'
import { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

function Editor(props) {
    const {
        icon,
        language,
        displayName,
        value, 
        onChange
    } = props;
    function handleChange(editor, data, value){
        onChange(value);
    }
    const [expanded, setExpanded] = useState(true);
  return (
    <div className={`editor-container`} >
        <div className = 'editor-title'> 
        {icon}
        {displayName}
        <button onClick={()=>onChange('')}>
          <FontAwesomeIcon icon={faUndoAlt} />
        </button>
        <button onClick={()=> setExpanded(!expanded)}>
          <FontAwesomeIcon icon={expanded ? faCompressAlt : faExpandAlt}/>
        </button>
        </div>

        <ControlledEditor 
          onBeforeChange={handleChange}
          value = {value}
          className = 'code-mirror-wrapper'
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme:'material',
            lineNumber: true,
          }}
        />
    </div>
  );
}

export default Editor;