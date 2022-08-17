import React from 'react';
import { Paper, Checkbox, FormControlLabel, IconButton, Button } from '@mui/material';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import styled from 'styled-components';
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PaperContainer = styled(Paper)`
  height: 500px;
  width: 330px;
  background-color: white;
  margin: auto;
`;
const TodoContainer = styled(PaperContainer)`
  padding: 20px;
  height: 460px;
  width: 580px;
`;
const Title = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
`;
const DayText = styled.div`
  font-size: 30px;
  font-weight: 800;
`;
const DateText = styled.div`
  padding-bottom: 4px;
`;
const TodoItemContainer = styled(FlexDiv)`
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  color: ${props => props.done ? '#1976d2' : 'black'};
`;

const TodoList = (props) => {
  const { date, todoLists, onTodoToggle, onTodoDelete, onModalOpen } = props;
  return (
    <TodoContainer square elevation={3}>
      <Title>
        <DayText>
          {date.toDateString().split(' ')[0]}
        </DayText>
        <DateText>
          {date.toDateString().slice(4)}
        </DateText>
      </Title>
      <hr />
      <div style={{height:'360px'}}>
        {todoLists.length !== 0 ? todoLists.filter(list=> list.date === date.toDateString()).map(list => (
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
        )) : null}
      </div>
      <hr />
      <FlexDiv style={{alignItems:'center'}}>
        <div>
          {todoLists.filter(list=>list.date === date.toDateString()).length} 
          TASK
        </div>
        <Button endIcon={<AddIcon />} onClick={onModalOpen}>ADD NEW</Button>
      </FlexDiv>
    </TodoContainer>  
  );
};

export default TodoList;