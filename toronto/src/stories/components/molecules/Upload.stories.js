import { Upload, DraggableArea } from '@/components/molecules';

export default {
  title: 'Components/Molecules/Upload',
  component: Upload,
  argTypes: {
    clickArea: { control: 'boolean', defaultValue: false },
    droppable: { control: 'boolean', defaultValue: false },
    name: { control: 'text' },
    accept: { control: 'text' },
    value: { control: 'text' },
  },
};

export const Default = (args) => {
  return (
    <Upload {...args}>
      <button>Upload!</button>
    </Upload>
  );
};

export const Draggable = (args) => {
  return (
    <Upload {...args}>
      {(file, dragging, handleChooseFile) => {
        return (
          <DraggableArea
            width={600}
            height={400}
            file={file}
            dragging={dragging}
            onClick={handleChooseFile}
          ></DraggableArea>
        );
      }}
    </Upload>
  );
};
