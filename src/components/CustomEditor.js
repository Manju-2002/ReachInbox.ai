import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomEditor = () => {
  const handleSave = () => {
    // Save functionality
  };

  const handleVariables = () => {
    // Variables functionality
  };

  return (
    <div>
      <ReactQuill />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleVariables}>Variables</button>
    </div>
  );
};

export default CustomEditor;
