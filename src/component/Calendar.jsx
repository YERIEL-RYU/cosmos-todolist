import React from 'react';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { Paper } from '@mui/material';
import styled from 'styled-components';

const PaperContainer = styled(Paper)`
  height: 500px;
  width: 330px;
  background-color: white;
  margin: auto;
`;
const Calendar = (props) => {
  const {date, onDateChange} = props;
  
  return (
    <PaperContainer square elevation={3}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker date={date} onChange={(newDate) => onDateChange(newDate)} />
    </LocalizationProvider>    
  </PaperContainer>
  );
};

export default Calendar;