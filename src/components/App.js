import React, { useState } from 'react';
import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml} />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss} />
        <Editor
          language="js"
          displayName="JS"
          value={js}
          onChange={setJs} />
      </div>



      <div className="bottom-pane">
        <iframe
          title="output"
          santbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%" />
      </div>
    </>
  );
}

export default App;
