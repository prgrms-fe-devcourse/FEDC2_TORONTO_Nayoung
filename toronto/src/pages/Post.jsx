import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@components/atoms/Button';
import Card from '@components/atoms/Card';
import Input from '@components/atoms/Input';
import Upload from '@components/molecules/Upload';
import DraggableArea from '@components/molecules/Upload/UploadArea';

const Post = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    agree: '',
    disagree: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { title, content, agree, disagree, image } = postData;

  const handleClick = (e) => {
    const formData = new FormData();
    const titleData = {
      title,
      content,
      agree,
      disagree,
    };
    formData.append('title', JSON.stringify(titleData));
    formData.append('image', image);
    formData.append('channelId', '629f0b8ed648c11b1bd9d300');

    setLoading(true);
    fetch('/posts/create', {
      method: 'POST',
      headers: {
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyOWY2MDE1NmQzZWFkMzlhY2M3MDdmZiIsImVtYWlsIjoiamVvbmdraUBqZW9uZ2tpLmNvbSJ9LCJpYXQiOjE2NTQ4NzcyNjV9.4MSj80cp9i0HiEmlk08cADIXHvoxilwv4ghzG-gVWzo',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        // 글쓰기가 완료 되었을 때 페이지 이동을 수행합니다. 임시로 메인으로 이동합니다.
        navigate('/');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleFileChange = (file) => {
    setPostData({
      ...postData,
      image: file,
    });
  };

  return (
    <Card padding={20}>
      <Wrapper>
        <Input
          block
          name='title'
          value={title}
          onChange={handleChange}
          placeholder='제목'
        />
        <Upload droppable name='image' onChange={handleFileChange}>
          {(file, dragging, handleChooseFile) => (
            <DraggableArea
              file={file}
              onClick={handleChooseFile}
              dragging={dragging}
              width={600}
              height={400}
            ></DraggableArea>
          )}
        </Upload>
        <Input
          block
          name='content'
          value={content}
          onChange={handleChange}
          placeholder='내용'
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <Input
            name='agree'
            value={agree}
            onChange={handleChange}
            placeholder='찬성'
            wrapperProps={{
              style: { flex: 1 },
            }}
          />
          <Input
            name='disagree'
            value={disagree}
            onChange={handleChange}
            placeholder='반대'
            wrapperProps={{
              style: { flex: 1 },
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleClick}
            disabled={loading ? true : false}
            style={{ marginTop: '10px' }}
          >
            글쓰기
          </Button>
        </div>
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export default Post;
