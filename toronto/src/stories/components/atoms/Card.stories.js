import styled from 'styled-components';
import { Card, Header, Text, Image } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Card',
  component: Card,
  argTypes: {
    padding: { defaultValue: 10, control: 'number' },
    hover: { defaultValue: false, control: 'boolean' },
    shadow: { defaultValue: true, control: 'boolean' },
    color: { defaultValue: '#fff', control: 'color' },
    radius: { defaultValue: 5, control: 'number' },
  },
};

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
`;

export const Default = (args) => {
  return (
    <Card {...args}>
      <Header>PostTitle</Header>
      <Image src='https://picsum.photos/200' />
      <Text style={{ display: 'block' }}>PostContent</Text>
    </Card>
  );
};

export const Wrap = (args) => {
  return (
    <Card {...args}>
      <Wrapper>
        <Header>PostTitle</Header>
        <Image src='https://picsum.photos/200' width={'100%'} height={200} />
        <Text style={{ display: 'block' }}>PostContent</Text>
      </Wrapper>
    </Card>
  );
};
