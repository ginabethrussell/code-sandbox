import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import logo from '../girl.png';
import downloadIcon from '../downloadIcon.png';
import openIcon from '../open.png';
import generate from 'project-name-generator';

import "../App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      filename: "",
      html: "",
      css: "",
      js: "",
      selectedFile: ""
    };
  }

  handleChange = (e) => {
      this.setState({
          ...this.state,
          filename: e.target.value
      })
  }
  selectFile = (e) => {
      this.setState({
          ...this.state,
          selectedFile: e.target.value
      })
  }

  displayFile = (e) => {
    e.preventDefault();
    console.log("open files", this.props.files)
    const fileToRetrieve = this.state.selectedFile;
    console.log(fileToRetrieve);
    const openFile = this.props.files.filter(file => file.filename === fileToRetrieve)[0];
    this.setState({
        ...this.state,
        filename: openFile.filename,
        html: openFile.html,
        css: openFile.css,
        js: openFile.js,
        selectedFile: ''
    })
    console.log(openFile);
  }

  addFile = (e) => {
      e.preventDefault();
      let newFileObj = {}
      if (this.state.filename === ''){
        const randomName = generate().dashed; 
        this.setState({
            ...this.state,
            filename: randomName
        })       
        newFileObj = {
            filename: randomName,
            html: this.state.html,
            css: this.state.css,
            js: this.state.js
        }
      }else{
        newFileObj = {
            filename: this.state.filename,
            html: this.state.html,
            css: this.state.css,
            js: this.state.js
        }
      }
      this.props.saveFile(newFileObj)   
  }

  handleLogOut = (e) => {
      e.preventDefault();
      this.props.logOutUser();
  }

  componentDidUpdate() {
    this.runCode();
  }



  runCode = () => {
    const { html, css, js } = this.state;

    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
    const { html, js, css } = this.state;
    const codeMirrorOptions = {
      theme: 'material',
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    return (
    <div className='code-editor-page'>
        <div className='header-wrapper'>
            <nav>
                <div className='title-wrapper'>
                    <div className='logo-div'>
                        <img className='logo' src={logo} alt='logo' />
                        <h1>Code Friends</h1>
                    </div>
                    <div className='user-div'>
                        <h2>{`${this.props.user}'s Sandbox`}</h2>
                    </div>
                </div>
                <div className='button-div'>
                    <input type='text'
                        name='filename'
                        placeholder='...name your project'
                        value={this.state.filename}
                        onChange={this.handleChange}
                        />
                    <button onClick={this.addFile} className='header-button'><img className='icon-img' src={downloadIcon} alt='play-icon'/></button>
                    <select name='selectFile' value={this.state.selectedFile} onChange={this.selectFile}>
                        <option value=''>Select a file</option>
                        {
                            this.props.files.map(file => (
                                <option key={file.filename} value={file.filename}>{file.filename}</option>
                            ))
                        }
                    </select>
                    <button onClick={this.displayFile} className='header-button'><img className='icon-img' src={openIcon} alt='open-icon'/></button>
                    <button onClick={this.handleLogOut} className='header-button account'>Log Out</button>
                </div>
            </nav>
        </div>
      <div className="code-editor-wrapper">
        <section className="playground">
          <div className="code-editor html-code">
            <div className="editor-header">HTML</div>
            <CodeMirror
              value={html}
              options={{
                mode: 'htmlmixed',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, html) => {
                this.setState({ html });
              }}
            />
          </div>
          <div className="code-editor css-code">
            <div className="editor-header">CSS</div>
            <CodeMirror
              value={css}
              options={{
                mode: 'css',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, css) => {
                this.setState({ css });
              }}
            />
          </div>
          <div className="code-editor js-code">
            <div className="editor-header">JavaScript</div>
            <CodeMirror
              value={js}
              options={{
                mode: 'javascript',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, js) => {
                this.setState({ js });
              }}
            />
          </div>
        </section>
        <section className="result">
          <iframe title="result" className="iframe" ref="iframe" />
        </section>
      </div>
      </div>
    );
  }
}
export default CodeEditor;