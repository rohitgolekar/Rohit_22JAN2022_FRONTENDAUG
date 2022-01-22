import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor(props) {

    const { displayName, language, value, onChange } = props;

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {displayName}
                <button>O/C</button>
            </div>

            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    theme: "material",
                    mode: language,
                    lineNumbers: true
                }} />
        </div>
    )
}

export default Editor;
