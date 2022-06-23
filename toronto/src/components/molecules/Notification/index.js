import styled from 'styled-components';
import { StyledLink, Avatar, Text } from '@/components/atoms';
import { putNotificationsSeen } from '@/api/Api.js';

const Notification = ({ notification, posts }) => {
  const notificationPost = posts.filter(
    (post) => post._id === notification.post,
  )[0];
  const title = JSON.parse(notificationPost.title).postTitle;
  const handleClick = async () => {
    await putNotificationsSeen();
  };

  if (notification.seen === false) {
    return (
      <Wrapper onClick={handleClick}>
        <StyledLink to={`/controversy/result/${notification.post}`}>
          <NotificationWrapper>
            <AvatarWrapper>
              <Avatar src={notification.author.image} size={60} />
            </AvatarWrapper>
            <ColWrapper>
              <TextWrapper>
                <Text color='#000'>
                  {notification.comment
                    ? notification.author.username +
                      ' 님이 ' +
                      title +
                      '에 댓글을 남겼습니다!'
                    : ''}
                  {notification.like
                    ? notification.author.username +
                      ' 님이 ' +
                      title +
                      '에 좋아요를 눌렀습니다!'
                    : ''}
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text color='#000' strong>
                  {notification.comment
                    ? JSON.parse(notification.comment.comment).content
                    : ''}
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text color='#2f66d2'>
                  {notification.updatedAt.split('T')[0]}일
                  {' ' +
                    new Date(Date.parse(notification.updatedAt) + 3240 * 10000)
                      .toISOString()
                      .split('T')[1]
                      .slice(0, 5)}
                  분에 업데이트 되었습니다.
                </Text>
              </TextWrapper>
            </ColWrapper>
          </NotificationWrapper>
        </StyledLink>
      </Wrapper>
    );
  }
};

export default Notification;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-radius: 4px;
  &:hover {
    background-color: #eee;
  }
`;

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
`;

const ColWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  word-break: keep-all;
  line-height: 1.5em;
`;
