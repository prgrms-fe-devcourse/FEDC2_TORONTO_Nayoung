import { InputBar } from '@/components/molecules';

export default {
  title: 'Components/Molecules/InputBar',
  component: InputBar,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    buttonText: {
      control: 'text',
    },
    totalWidth: {
      control: 'text',
    },
    buttonWidth: {
      control: 'text',
    },
    buttonType: {
      control: 'select',
      options: ['inside', 'outside'],
    },
  },
};

export const CommentInput = (args) => {
  return (
    <InputBar
      buttonType='outside'
      placeholder='댓글을 입력하세요.'
      buttonText='작성'
      buttonWidth={80}
      totalWidth={300}
      {...args}
    />
  );
};

export const SearchInput = (args) => {
  return (
    <InputBar
      totalWidth={300}
      buttonType='inside'
      placeholder='Search'
      {...args}
    />
  );
};
