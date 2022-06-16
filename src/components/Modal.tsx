import React from 'react';

interface IModalProps {
    isOpen: boolean
    close: () => void
    title: string 
    children?: JSX.Element
}

const Modal: React.FC<IModalProps> = ({isOpen, close, title, children}) => {

    if (isOpen) {
        return (
            <div className='modalWrapper'>
                <div onClick={close}>X</div>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
          );
        }
      return null
    }

export default Modal;
