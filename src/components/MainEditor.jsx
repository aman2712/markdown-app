import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../markdown-styles.module.css';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';
import SyntaxHighlight from './SyntaxHighlight';

const MainEditor = () => {
  const [markdownText, setMarkdownText] = useState('# Hello World');

  return (
    <div className="flex flex-1">
      <div className="flex-1 h-full flex w-1/2 flex-col border-r border-solid border-gray-600 w-50">
        <div style={{ backgroundColor: '#1E1F23' }}>
          <p className="tracking-widest text-white text-sm p-2">MARKDOWN</p>
        </div>
        <CodeMirror
          value={markdownText}
          className="w-full flex-1 resize-none"
          theme={oneDark}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => {
            setMarkdownText(value);
          }}
        />
      </div>
      <div className="flex-1 h-full flex flex-col w-1/2 break-words">
        <div style={{ backgroundColor: '#1E1F23' }}>
          <p className="tracking-widest text-white text-sm p-2">PREVIEW</p>
        </div>
        <div className={`${styles.reactMarkDown} preview-wrapper`}>
          <ReactMarkdown
            className="prose prose-invert preview"
            components={SyntaxHighlight}
          >
            {markdownText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MainEditor;
