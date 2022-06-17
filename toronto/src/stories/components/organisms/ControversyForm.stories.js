import ControversyForm from '@/components/organisms/ControversyForm';

export default {
  title: 'Component/organisms/ControversyForm',
  component: ControversyForm,
  argTypes: {
    header: { defaultValue: '깻잎 논쟁', control: { type: 'text' } },
    details: { defaultValue: '블라블라', control: { type: 'text' } },
    agreeTitle: { defaultValue: '된다', control: { type: 'text' } },
    disagreeTitle: { defaultValue: '안된다', control: { type: 'text' } },
    imgSrc: {
      type: { name: 'string', require: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
  },
};

export const Default = (args) => {
  return <ControversyForm {...args} />;
};
