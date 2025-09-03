import React from 'react';
import { Button, Dialog, TextField } from '@mui/material';
import styled from 'styled-components';
const InputModal = styled.div`
  &&{
    padding: 10px 20px;
  }
`;
const DialogContainer = (props) => {
  const { modal, onModalClose, date, todoText, onTodoTextChange, onInsert } = props;
  return (
    <Dialog
      open={modal}
      onClose={onModalClose}
      maxWidth='xs'
      fullWidth
    >
      <InputModal>
        <div style={{paddingBottom: '10px', paddingTop: '10px'}}>
          새로운 Todo를 입력하세요 test
        </div>
        <div style={{paddingBottom: '10px'}}>{date.toDateString().slice(4)}</div>
        <TextField type="text" value={todoText} onChange={onTodoTextChange} size='small' fullWidth/>
        <Button variant='outlined' style={{marginTop:'10px', float: 'right'}} onClick={onInsert} >ADD</Button>
      </InputModal>
    </Dialog>
  );
};

export default DialogContainer;