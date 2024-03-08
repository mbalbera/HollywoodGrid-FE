import React from 'react';
const Modal = ({ closeModal, title, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background') {
      closeModal();
    }
  };

  const modalBackgroundStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyles = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
    position: 'relative',
    zIndex: 1001,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  };

  const closeButtonStyles = {
    backgroundColor: '#eee',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    width: '30px',
  };

  const xStyle={
    color: 'black',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '50%',
    cursor: 'pointer',
  }

  return (
    <div id="modal-background" style={modalBackgroundStyles} onClick={handleOutsideClick}>
      <div style={modalContentStyles}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
          <div>
            <h2>{title}</h2>
          </div>
          <div style={closeButtonStyles}>
              <button style={xStyle} onClick={closeModal}>X</button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;