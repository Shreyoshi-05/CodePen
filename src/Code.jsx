import React, { createContext, useState } from 'react';
import logo from '../public/logo.png';
import Editor from './Editor';
import Result from './Result';

// export const CodeContext = createContext();
export const codeContext = createContext();

const Code = () => {
  const [html, setHtml] = useState(" ");
  const [css, setCss] = useState(" ");
  const [js, setJs] = useState(" ");

  return (
    <div id='codepage'>
      <codeContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
        <header>
          <img id='logo' src={logo} alt="Logo" />
          <a href="/signup">Sign Up</a>
        </header>

        <div id="codeEditor">
          <Editor
            name="html"
            span="/"
            colour="red"
            value={html}
            onChange={setHtml}
          />
          <Editor
            name="css"
            span="*"
            id="css"
            colour="rgb(42, 65, 126)"
            value={css}
            onChange={setCss}
          />
          <Editor
            name="js"
            span="{}"
            colour=" rgb(200, 144, 32)"
            value={js}
            onChange={setJs}
          />
        </div>
        <Result />
      </codeContext.Provider>
    </div>
  );
}

export default Code;