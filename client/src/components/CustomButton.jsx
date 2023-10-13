import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { color } from 'framer-motion';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  //   console.log('snap.color:', snap.color);
  const generateStyle = (type) => {
    if (type === 'filled') {
      console.log('snap.color:', snap.color);
      console.log(type);
      return {
        backgroundColor: snap.color,
        color: '#FFF',
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
