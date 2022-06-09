import styled from 'styled-components';
import { useRef, useState } from 'react';

const UploadContainer = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  display: none;
`;

const Upload = ({
  children,
  clickArea = false,
  droppable,
  name,
  accept,
  value,
  onChange,
  ...props
}) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);
  const enterCounter = useRef(0);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  const handleDragEnter = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    if (
      e.dataTransfer.items &&
      e.dataTransfer.items.length > 0 &&
      e.dataTransfer.types.indexOf('Files') >= 0
    ) {
      setDragging(true);
    }
    enterCounter.current++;
  };
  const handleDragLeave = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    enterCounter.current--;
    if (enterCounter.current === 0) {
      setDragging(false);
    }
  };
  const handleDragOver = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileDrop = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    onChange && onChange(changedFile);
    setFile(changedFile);
    setDragging(false);
    enterCounter.current = 0;
  };

  return (
    <UploadContainer
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onClick={clickArea ? handleChooseFile : null}
      {...props}
    >
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function'
        ? children(file, dragging, handleChooseFile)
        : children}
    </UploadContainer>
  );
};

export default Upload;
