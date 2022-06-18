import UserItem from '@/components/molecules/UserItem';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

export default {
  title: 'Component/Molecules/UserItem',
  component: UserItem,
};

const DUMMY_DATA = {
  role: 'Regular',
  emailVerified: false,
  banned: false,
  isOnline: false,
  posts: [],
  likes: [],
  comments: [],
  followers: [],
  following: [],
  notifications: [],
  messages: [],
  _id: '62a6c351f1f0277287103588',
  fullName: 'JaeungE',
  email: 'jaeunge@gmail.com',
  createdAt: '2022-06-13T04:55:45.242Z',
  updatedAt: '2022-06-17T15:04:34.586Z',
  __v: 0,
  image:
    'https://res.cloudinary.com/learnprogrammers/image/upload/v1655130539/user/77541887-66f8-4c33-a59d-92cab0bcc9ad.jpg',
  imagePublicId: 'user/77541887-66f8-4c33-a59d-92cab0bcc9ad',
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export const Default = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <UserItem user={DUMMY_DATA} />
      </Wrapper>
    </BrowserRouter>
  );
};
