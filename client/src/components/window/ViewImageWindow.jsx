'use client';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../hooks/useOutsideClick';
const ViewImageWindow = ({ src, onClose }) => {
  const imgRef = useRef();

  useOutsideClick(imgRef, null, () => {
    onClose();
  });
  return createPortal(
    <div className="window-outer-container view-image-window">
      <img ref={imgRef} src={src} alt="" />
    </div>,
    document.body,
  );
};

export default ViewImageWindow;
