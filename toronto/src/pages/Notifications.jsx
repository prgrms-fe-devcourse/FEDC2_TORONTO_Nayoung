import styled from 'styled-components';
import { Header, Icon } from '@/components/atoms';
import Notification from '@/components/molecules/Notification';
import { useEffect, useState } from 'react';
import { getNotifications } from '@/api/Api';
const Notifications = () => {
  // API 연동
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getNotifications();
      setNotifications(response.data);
    };
    fetchData();
  }, []);

  return (
    <ContentWrapper>
      <Wrapper>
        <Section>
          <Header level={2}>알림</Header>
          <StyledButton>
            <Icon
              size={20}
              iconName='more-horizontal'
              style={{ verticalAlign: 'bottom' }}
            />
          </StyledButton>
        </Section>
        <Section>
          <ColWrapper>
            <Header level={4}>새로운 알림</Header>
            <ColWrapper>
              {notifications ? (
                notifications.map((data) => (
                  <Notification
                    key={data._id}
                    notification={data}
                  ></Notification>
                ))
              ) : (
                <div></div>
              )}
            </ColWrapper>
          </ColWrapper>
        </Section>
      </Wrapper>
    </ContentWrapper>
  );
};

export default Notifications;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #f9fafb;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 700px;
  height: 700px;
`;

const Section = styled.section`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #eeeeee;
  }
  &:active {
    background-color: #f9fafb;
  }
  &:disabled {
    background-color: gray;
    cursor: default;
  }
`;
