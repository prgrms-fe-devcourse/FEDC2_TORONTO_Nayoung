import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Card, Input } from '@/components/atoms';
import { Upload, DraggableArea } from '@/components/molecules';
import { postPost } from '@/api/Api';
import { getToken } from '../lib/Login';

const Post = () => {
  const [postData, setPostData] = useState({
    postTitle: '',
    postContent: '',
    agreeContent: '',
    disagreeContent: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = getToken();

  const { postTitle, postContent, agreeContent, disagreeContent, image } =
    postData;

  useEffect(() => {
    if (!token) {
      alert('로그인 된 사용자만 접근할 수 있습니다.');
      navigate('/');
    }
  }, [token, navigate]);

  const handleClick = async (e) => {
    const formData = new FormData();
    const titleData = {
      postTitle,
      postContent,
      agreeContent,
      disagreeContent,
    };
    formData.append('title', JSON.stringify(titleData));
    formData.append('image', image);
    formData.append('channelId', '629f0b8ed648c11b1bd9d300');

    setLoading(true);
    const res = await postPost(formData);
    if (res.statusText === 'OK') {
      navigate(`/controversy/${res.data._id}`);
    }
    setLoading(false);
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
          name='postTitle'
          value={postTitle}
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
          name='postContent'
          value={postContent}
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
            name='agreeContent'
            value={agreeContent}
            onChange={handleChange}
            placeholder='찬성'
            wrapperProps={{
              style: { flex: 1 },
            }}
          />
          <Input
            name='disagreeContent'
            value={disagreeContent}
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
