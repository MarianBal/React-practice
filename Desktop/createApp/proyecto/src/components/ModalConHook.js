import React, {useState } from 'react';
import { createPortal } from "react-dom";
import './appDos.css';


const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <div>
      {toggle(show)}
      {isShown && content(hide)}
    </div>
  );
};

const Modal = ({ children }) => (
 createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  )
);

const ModalConHook = () => (
  <p>
    Click to reveal a secret:

    <ToggleContent
      toggle={show => <button onClick={show}>Open</button>}
      content={hide => (
        <Modal>
          There is no spoon...
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
  </p>
);

export default ModalConHook;
