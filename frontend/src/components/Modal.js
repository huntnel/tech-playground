import React from 'react';

const Modal = ({ isOpen, onClose, children, isHint }) => {
  if (!isOpen) return null;
  const modalClass = isHint ? 'hintModal' : 'completionModal'
  const completionHeader = "Congratulations, task completed!"

  return (
    <div className="modal-overlay">
      <div className={modalClass}>
        <h1>{!isHint && completionHeader}</h1>
      <button className='modalButton' onClick={onClose}><div style={{ width: '2rem', height: '2rem', alignItems: 'center', justifyContent: 'center', display: 'flex', fontFamily: "monospace" }}>&times;</div></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;