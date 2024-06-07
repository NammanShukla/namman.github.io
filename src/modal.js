import React from 'react'
import ReactDom from 'react-dom'; 

export default function Modal({ open, children, onClose}) {
    if (!open) return null  
  return ReactDom.createPortal(
    <div className='modal-overlay' onClick={onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={onClose}>X</button>
            {children}
        </div>
    </div>,

    document.getElementById('modal')
  )
}


