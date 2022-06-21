import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Card, Input, Header } from '@/components/atoms';
import { Upload, DraggableArea } from '@/components/molecules';
import { useUsersState } from '@/contexts/UserContext';
import { postPost } from '@/api/Api';

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
  const { data: user } = useUsersState().user;

  const { postTitle, postContent, agreeContent, disagreeContent, image } =
    postData;

  useEffect(() => {
    if (!user) {
      alert('로그인 된 사용자만 접근할 수 있습니다.');
      navigate('/');
    }
  }, [user, navigate]);

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
    <PostUploadContainer>
      <Card padding={20} shadow={false}>
        <Wrapper>
          <Header
            level={1}
            style={{
              fontFamily: 'S-CoreDream-Medium',
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
              paddingBottom: 10,
            }}
          >
            논쟁 올리기
          </Header>
          <Input
            block
            name='postTitle'
            value={postTitle}
            onChange={handleChange}
            placeholder='제목'
            style={{ paddingTop: 10 }}
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
    </PostUploadContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const PostUploadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`;

export default Post;
