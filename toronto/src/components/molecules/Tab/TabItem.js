import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';

const TabItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  border-bottom: ${({ active }) =>
    active ? '2px solid #2366F6' : '2px solid #ddd'};
  background-color: ${({ active }) => (active ? '#FFF' : '#F9FAFB')};
  color: ${({ active }) => (active ? '#2366F6' : '#505967')};
  cursor: pointer;
`;

const TabItem = ({ title, index, active, ...props }) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <Text strong={active}>{title}</Text>
    </TabItemWrapper>
  );
};

TabItem.defaultProps = {
  __TYPE: 'Tab.Item',
};

TabItem.propTypes = {
  __TYPE: PropTypes.oneOf(['Tab.Item']),
};

export default TabItem;
