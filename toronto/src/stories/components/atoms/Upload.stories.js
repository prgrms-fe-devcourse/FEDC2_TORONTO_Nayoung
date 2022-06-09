import Upload from '@/components/atoms/Upload';
import DraggableArea from '../../../components/atoms/Upload/UploadArea';

export default {
  title: 'Component/Upload',
  component: Upload,
};

export const Default = () => {
  return (
    <Upload clickArea>
      <button>Upload!</button>
    </Upload>
  );
};

export const Draggable = () => {
  return (
    <Upload droppable>
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
