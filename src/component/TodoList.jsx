import React from 'react';
import { Paper, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import styled from 'styled-components';
import ListItem from './ListItem';
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
          <ListItem list={list} onTodoToggle={onTodoToggle} onTodoDelete={onTodoDelete} />
        )) : null}
      </div>
      <hr />
      <FlexDiv style={{alignItems:'center'}}>
        <div>
          {todoLists.filter(list=>list.date === date.toDateString()).length} 
          test
        </div>
        <Button endIcon={<AddIcon />} onClick={onModalOpen}>ADD NEW</Button>
      </FlexDiv>
    </TodoContainer>  
  );
};

export default TodoList;