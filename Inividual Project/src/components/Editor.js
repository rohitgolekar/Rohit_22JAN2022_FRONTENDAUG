import React, { useState } from 'react';
import '../components/App.css';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

function Editor(props) {

    const { displayName, language, value, onChange } = props;
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                        <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                    </button>
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
