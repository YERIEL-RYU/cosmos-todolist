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
        <Calendar date={date} onDateChange={onDateChange} />
        <TodoList 
          date={date}
          todoLists={todoLists}
          onTodoToggle={onTodoToggle}
          onTodoDelete={onTodoDelete}
          onModalOpen={onModalOpen}
        />
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