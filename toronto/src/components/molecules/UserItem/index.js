import StyledLink from '@/components/atoms/StyledLink';
import Card from '@/components/atoms/Card';
import Header from '@/components/atoms/Header';
import Image from '@/components/atoms/Image';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserItem = ({ user }) => {
  return (
    <StyledLi>
      <StyledLink to={`/users/${user._id}`} style={{ color: 'black' }}>
        <Card
          hover={true}
          radius={5}
          style={{ width: '100%', boxSizing: 'border-box', overflow: 'hidden' }}
        >
          <UserContainer>
            <Image
              src={user.image || 'https://via.placeholder.com/200'}
              width={'100%'}
              height={300}
            ></Image>
            <Header
              level={3}
              style={{
                padding: 10,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {user.fullName}
            </Header>
          </UserContainer>
        </Card>
      </StyledLink>
    </StyledLi>
  );
};

export default UserItem;
