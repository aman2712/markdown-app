import React from 'react';
import EditorHeader from '../components/EditorHeader';
import MainEditor from '../components/MainEditor';

const EditorScreen = () => {
  return (
    <div className="h-screen flex flex-col">
      <EditorHeader />
      <MainEditor />
    </div>
  );
};

export default EditorScreen;
