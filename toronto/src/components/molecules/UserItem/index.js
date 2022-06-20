import { StyledLink, Card, Header, Image } from '@/components/atoms';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const UserItem = ({ user }) => {
  return (
    <StyledLi>
      <StyledLink to={`/users/${user._id}`} style={{ color: 'black' }}>
        <Card
          hover={true}
          radius={0}
          style={{
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <UserContainer>
            <Image
              src={user.image || 'https://via.placeholder.com/200'}
              width={'100%'}
              height={200}
              style={{
                flexGrow: 1,
              }}
            ></Image>
            <Header
              level={3}
              style={{
                margin: 0,
                padding: 20,
                borderTop: '1px solid #b1b1b182',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontFamily: 'S-CoreDream-Medium',
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
