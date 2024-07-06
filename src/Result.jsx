import React, { useContext, useEffect, useState } from 'react'
import { codeContext } from './Code'

const Result = () => {

    const {html, css , js} = useContext(codeContext);
    const[src , setSrc] = useState("")

    // console.log(html, css, js)

    const srcCode =
    `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>`



    // useEffect(()=>{
    //     setInterval(()=>{
    //         setSrc(srcCode)
    //     },1000);
    // },[html, js, css]);

  return (
    <div style={{height:"41vh"}}>
      <iframe
      srcDoc={srcCode}
      title="Output"
      sandbox='allow-scripts'
      width="100%"
      />
    </div>
  )
}

export default Result
