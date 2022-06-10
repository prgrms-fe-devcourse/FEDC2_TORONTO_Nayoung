import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Header from '@/components/atoms/Header';
import Image from '@/components/atoms/Image';
import Loader from '@/components/atoms/Loader';
import Button from '@/components/atoms/Button';

const DraggableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 2px dashed ${({ dragging }) => (dragging ? '#2366f6' : '#649dd6')};
  border-radius: 4px;
  padding: 10px;
  background-color: rgba(100, 157, 214, 0.05);
  transform: ${({ dragging }) => (dragging ? 'scale(1.02)' : undefined)};
  transition: transform 0.3s ease;
`;

const DraggableArea = ({
  file,
  width = 200,
  height = 200,
  dragging,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const [dataUrl, setDataUrl] = useState('');

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setDataUrl(e.target.result);
      setLoading(false);
    };
    reader.readAsDataURL(file);
    setLoading(true);
  };

  useEffect(() => {
    if (!file) return;
    readFile(file);
  }, [file]);

  return (
    <DraggableContainer
      width={width}
      height={height}
      dragging={dragging}
      {...props}
    >
      {file ? (
        <>
          {loading && <Loader type='spinner' />}
          <Image
            width='100%'
            height={loading ? '0' : '100%'}
            mode='cover'
            alt='preview'
            src={dataUrl}
            style={{ overflow: 'hidden' }}
          ></Image>
        </>
      ) : (
        <>
          <Header level={2} strong>
            파일을 드래그해서 업로드 해보세요!
          </Header>
          <Text>또는</Text>
          <Button onClick={onClick}>파일 찾아보기</Button>
        </>
      )}
    </DraggableContainer>
  );
};

export default DraggableArea;
