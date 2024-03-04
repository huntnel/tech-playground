import React from 'react';

const Modal = ({ isOpen, onClose, codeHint }) => {
    console.log('isOpen: ' + isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className='testModal'>
        <button className='modalButton' onClick={onClose}><div style={{ width: '2rem', height: '2rem', alignItems: 'center', justifyContent: 'center', display: 'flex', fontFamily: "monospace" }}>&times;</div></button>
        <div className='hintContent'>{codeHint}</div>
      </div>
    </div>
  );
};

export default Modal;