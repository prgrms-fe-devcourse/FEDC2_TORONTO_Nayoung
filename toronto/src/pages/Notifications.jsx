import styled from 'styled-components';
import { Header, Skeleton, Text } from '@/components/atoms';
import Notification from '@/components/molecules/Notification';
import { useEffect, useState } from 'react';
import { getNotifications, getPostsApi } from '@/api/Api';
const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getNotifications();
      const postsRes = await getPostsApi();
      setPosts(postsRes.data);
      setNotifications(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderSkeleton = () => {
    const skeletons = [];
    for (let i = 0; i < 3; i++) {
      skeletons.push(
        <Skeleton.Notification key={i} width={'100%'} height={'100%'} />,
      );
    }
    return skeletons;
  };

  return (
    <ContentWrapper>
      <Wrapper>
        <Section>
          <Header level={2}>알림</Header>
        </Section>
        <Section>
          <ColWrapper>
            {notifications.filter((notification) => notification.seen === false)
              .length >= 1 ? (
              <Header level={4}>새로운 알림</Header>
            ) : (
              <Text>{isLoading ? '' : '새로운 알림이 없습니다.'}</Text>
            )}
            <NotificationWrapper>
              {isLoading && renderSkeleton()}
              {notifications ? (
                notifications.map((data) => (
                  <Notification
                    key={data._id}
                    notification={data}
                    posts={posts}
                  ></Notification>
                ))
              ) : (
                <div></div>
              )}
            </NotificationWrapper>
          </ColWrapper>
        </Section>
      </Wrapper>
    </ContentWrapper>
  );
};

export default Notifications;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 auto;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
