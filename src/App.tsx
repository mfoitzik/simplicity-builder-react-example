import './App.css'
import  { SimplicityBuilder } from '@simplicitywebtools/simplicity-builder-react'
import { MouseEventHandler, useRef, useState } from 'react'
// @ts-expect-error shared vanilla js files for examples
import helloWorldConfig from "../public/config/config_helloworld.js";
// @ts-expect-error shared vanilla js files for examples
import basicConfig from "../public/config/config_basic.js";
// @ts-expect-error shared vanilla js files for examples
import template_helloworld from "../public/templates/template_helloworld/template_helloworld.js";
// @ts-expect-error shared vanilla js files for examples
import template_basic from "../public/templates/template_basic/template_basic.js";
const currentHost = window.location.protocol + "//" + window.location.host;


function App() {
  const [text, setText] = useState('');
  const sbRef = useRef<HTMLSimplicityBuilderElement | null>(null);
  const setHelloWorldLink: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event?.preventDefault();
    const config = JSON.stringify(helloWorldConfig);
    const re = /##BASEADDRESS##/g;
    sbRef?.current?.setConfig(JSON.parse(config.replace(re, currentHost)));
    sbRef.current?.setContent(template_helloworld.replace(re, currentHost));
  };
  const setBasicLink: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event?.preventDefault();
    const config = JSON.stringify(basicConfig);
    const re = /##BASEADDRESS##/g;
    sbRef?.current?.setConfig(JSON.parse(config.replace(re, currentHost)));
    sbRef.current?.setContent(template_basic.replace(re, currentHost));
  };
  const setHelloWorld = () => {
    const config = JSON.stringify(helloWorldConfig);
    const re = /##BASEADDRESS##/g;
    sbRef?.current?.setConfig(JSON.parse(config.replace(re, currentHost)));
    sbRef.current?.setContent(template_helloworld.replace(re, currentHost));
  }
  const handleSave = (event: CustomEvent) => {
    setText(event.detail);
  }
  const handlePublish = (event: CustomEvent) => {
    setText(event.detail);
  }
  
  return (
    <>
    <div className="wrapper">
      <div className="left">
          <h1>Simplicity Builder&trade; Example</h1>
          <p><a href="" onClick={setHelloWorldLink}>Hello World Example</a></p>
          <p><a href="" onClick={setBasicLink}>Basic Example</a></p>
          <label>Save / Publish Output:</label>
          <textarea value={text} onChange={event => setText(event.target.value)}></textarea>
      </div>
      <div className="right">
          <SimplicityBuilder
          ref={sbRef}
          onReady={setHelloWorld}
          onSave={handleSave}
          onPublish={handlePublish}></SimplicityBuilder>
      </div>
    </div>
    </>
  )
}

export default App
