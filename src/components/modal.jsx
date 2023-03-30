import React, { useRef, useState } from "react";

function Modal({ open, onClose, children }) {
  const Modal2Ref = useRef();

  // Close the Modal2 if user clicks outside of it
  const handleClick = (e) => {
    if (Modal2Ref.current === e.target) {
      onClose();
    }
  };

  return (
    open && (
      <div
        ref={Modal2Ref}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
        onClick={handleClick}
      >
        <div className="relative w-full max-w-2xl p-4 mx-4 bg-white rounded-md shadow-lg sm:p-6">
          {children}
        </div>
      </div>
    )
  );
}
export default Modal;