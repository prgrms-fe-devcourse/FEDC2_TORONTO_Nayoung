import { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, Fade, Box, Typography } from '@mui/material';

export default function AnimatedModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#eee',
    padding: '2rem',
    borderRadius: '8px',
  };
  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>
        모달
      </Button>
      <Modal open={open}>
        <Fade in={open}>
          <Wrapper>
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                모달입니다~!
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                모달 내용을 넣어주세요!
              </Typography>
              <Button onClick={handleClose}>닫기</Button>
            </Box>
          </Wrapper>
        </Fade>
      </Modal>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
