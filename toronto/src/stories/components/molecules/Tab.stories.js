import { Tab } from '@/components/molecules';

export default {
  title: 'Components/Molecules/Tab',
  component: Tab,
};

export const Default = () => {
  return (
    <Tab>
      <Tab.Item title='내 게시물' index='item1'>
        내 게시물
      </Tab.Item>
      <Tab.Item title='좋아요 게시물' index='item2'>
        좋아요 게시물
      </Tab.Item>
    </Tab>
  );
};
