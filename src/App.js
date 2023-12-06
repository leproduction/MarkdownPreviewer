import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import './App.css';
import {marked} from 'marked'
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [count]);
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, <div></div>, between 2 backticks.


  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == ' && lastLine == '') {
      return multiLineCode;
    }
  }


  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `);
  marked.setOptions({
    breaks: true,

  })

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Container className="bg-secondary p-5 text-black border border-info text-center">
       <div id="quote-box">
      <textarea id="editor" onChange={handleChange} value={text} type="input"></textarea>
      <div
      id="preview"
      dangerouslySetInnerHTML={{__html:marked(text)}}>


      </div>
    </div>
    </Container>
  );
}

export default App;
