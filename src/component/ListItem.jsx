import React from 'react';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormControlLabel, Checkbox, IconButton } from '@mui/material';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TodoItemContainer = styled(FlexDiv)`
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  color: ${props => props.done ? '#1976d2' : 'black'};
`;

const ListItem = ({list, onTodoToggle, onTodoDelete}) => {
  return (
    <TodoItemContainer 
      done={list.done}
      key={list.id}
    > 
      <FormControlLabel 
        label={list.todo} 
        control={
          <Checkbox 
            checked={list.done}
            onChange={()=>onTodoToggle(list.id)} // 투두리스트 확인 클릭 이벤트
            icon={<SportsBarOutlinedIcon />} 
            checkedIcon={<SportsBarIcon />} 
          />
        }
      />
      <IconButton
        onClick={()=>onTodoDelete(list.id)} // 삭제 이벤트
      > 
        <DeleteIcon />
      </IconButton>
    </TodoItemContainer>
  );
};

export default ListItem;