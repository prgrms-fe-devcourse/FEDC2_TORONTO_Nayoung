import UserList from '@/components/organisms/UserList';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import InputBar from '@/components/molecules/InputBar';
import axios from 'axios';
import Skeleton from '@/components/atoms/Skeleton';

const renderSkeleton = () => {
  const skeletons = [];

  for (let i = 0; i < 10; i++) {
    skeletons.push(<Skeleton.Box key={i} width={'100%'} height={'100%'} />);
  }

  return skeletons;
};

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const initialUsers = useCallback(async () => {
    setIsLoading(true);

    const res = await axios.get(
      `${process.env.REACT_APP_END_POINT}/users/get-users`,
    );

    setUsers([...res.data]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    initialUsers();
  }, [initialUsers]);

  const handleSubmit = useCallback(
    async (value) => {
      if (!value) {
        initialUsers();
        return;
      }

      setIsLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_END_POINT}/search/users/${value}`,
      );

      setUsers([...res.data]);
      setIsLoading(false);
    },
    [initialUsers],
  );

  return (
    <Container>
      <Wrapper>
        <InputBar
          placeholder={'유저 검색'}
          buttonType={'inside'}
          onSubmit={(value) => handleSubmit(value)}
        />
      </Wrapper>
      <GridContainer>
        <UserList users={users} />
        {isLoading && renderSkeleton()}
      </GridContainer>
    </Container>
  );
};

export default UserListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GridContainer = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(360px, 1fr));
  grid-auto-rows: minmax(360px, 1fr);
  grid-auto-columns: minmax(360px, 1fr);
  gap: 30px;
`;
