import { BrowserRouter } from 'react-router-dom';
import { UserList } from '@/components/organisms';
import styled from 'styled-components';

export default {
  title: 'Components/Organisms/UserList',
  component: UserList,
};

const GridContainer = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

const DUMMY_DATA = [
  {
    _id: '62a73eeb4ed95908dae3b37c',
    fullName: '장규범',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655395844/user/1363f15d-f8d4-41d6-86fd-c83c87b8fb06.jpg',
  },
  {
    _id: '62a6c351f1f0277287103588',
    fullName: 'JaeungE',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655130539/user/77541887-66f8-4c33-a59d-92cab0bcc9ad.jpg',
  },
  {
    _id: '62a6d331f1f02772871035d3',
    fullName: '팽13',
  },
  {
    _id: '62ad869ddd215b4a8c00684f',
    fullName: '홍정기',
  },
];

export const Default = () => {
  return (
    <BrowserRouter>
      <GridContainer>
        <UserList users={DUMMY_DATA} />
      </GridContainer>
    </BrowserRouter>
  );
};
