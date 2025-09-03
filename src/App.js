import React, { useCallback, useState } from 'react';
import Calendar from './component/Calendar';
import TodoList from './component/TodoList';
import DialogContainer from './component/Dialog';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  background-image: linear-gradient(135deg, white, lightblue, darkblue); 
  height: 100vh;
`;

const App = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate)
  };

  const [modal, setModal] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      date: 'Thu Jul 28 2022',
      todo: '퇴근',
      done: false
    },
    {
      id: 2,
      date: 'Thu Jul 28 2022',
      todo: '야근',
      done: true
    }
  ]);

  const onModalOpen = () => {
    setModal(true)
  };
  const onModalClose = () => {
    setModal(false)
  };
  const onTodoTextChange = (e) => {
    setTodoText(e.target.value)
  };

  /** onInsert : 새로운 투두 리스트를 등록합니다. */
  const onInsert = useCallback(() => {
    var newTodo = {
      id: todoLists.length + 1,
      date: date.toDateString(),
      todo: todoText,
      done: false
    };

    // Array.concat 함수를 이용하여 새로운 투두리스트를 등록합니다.
    setTodoLists(todoLists.concat(newTodo))
    onModalClose();
    setTodoText('');
  },[todoLists, date, todoText]);

  /** onTodoToggle : 투두리스트 확인 함수 */
  const onTodoToggle = useCallback((id) => {
    var newTodo = todoLists.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo);
    setTodoLists(newTodo)
  },[todoLists]);

  /** onTodoDelete : 투두리스트 삭제 함수 */
  const onTodoDelete = useCallback((id)=> {
    var newTodo = todoLists.filter(todo => todo.id !== id)
    setTodoLists(newTodo)
  },[todoLists]);

  return (
    <>
      <Container>
        <PaperContainer square elevation={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker date={date} onChange={(newDate) => onDateChange(newDate)} />
          </LocalizationProvider>    
        </PaperContainer>
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
                      onChange={} // 투두리스트 확인 클릭 이벤트
                      icon={<SportsBarOutlinedIcon />} 
                      checkedIcon={<SportsBarIcon />} 
                    />
                  }
                />
                <IconButton
                  onClick={} // 삭제 이벤트
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
      </Container>
      <DialogContainer 
        modal={modal}
        onModalClose={onModalClose}
        date={date}
        todoText={todoText}
        onTodoTextChange={onTodoTextChange}
        onInsert={onInsert}
      />
    </>
  );
};

export default App;