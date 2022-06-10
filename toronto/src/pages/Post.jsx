import Button from '@components/atoms/Button';
import Card from '@components/atoms/Card';
import Input from '@components/atoms/Input';
import { useState } from 'react';

const Post = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    agree: '',
    disagree: '',
    image: null,
  });

  const { title, content, agree, disagree, image } = postData;

  const handleClick = (e) => {
    const formData = new FormData();
    formData.append('title', 'title');
    formData.append('image', image);
    formData.append('channelId', '629f0b8ed648c11b1bd9d300');

    fetch('/posts/create', {
      method: 'POST',
      headers: {
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyOWY2MDE1NmQzZWFkMzlhY2M3MDdmZiIsImVtYWlsIjoiamVvbmdraUBqZW9uZ2tpLmNvbSJ9LCJpYXQiOjE2NTQ4NzcyNjV9.4MSj80cp9i0HiEmlk08cADIXHvoxilwv4ghzG-gVWzo',
      },
      body: formData,
    })
      // fetch('/channels')
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  return (
    <Card>
      <Input
        block
        name='title'
        value={title}
        onChange={handleChange}
        placeholder='제목'
      />
      <Input
        block
        name='content'
        value={content}
        onChange={handleChange}
        placeholder='내용'
      />
      <Input
        name='agree'
        value={agree}
        onChange={handleChange}
        placeholder='찬성'
      />
      <Input
        name='disagree'
        value={disagree}
        onChange={handleChange}
        placeholder='반대'
      />
      <Button onClick={handleClick} />
    </Card>
  );
};

export default Post;
