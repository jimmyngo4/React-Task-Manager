//imports
  //react
  import React from "react";
  //materials
    import TextField from '@mui/material/TextField';
    import AdapterDateFns from '@mui/lab/AdapterDateFns';
    import LocalizationProvider from '@mui/lab/LocalizationProvider';
  //components
    import DatePicker from '@mui/lab/DatePicker';

//master export
  export default function BasicDatePicker(props) {
    let [date, setDate] = React.useState(props.dataFromParent);

    let sendDate = (input) => {
        setDate(input);
        props.parentCallback({
            date: input
        })
    };

    //master return
      return (
        <LocalizationProvider dateAdapter = {AdapterDateFns} >
          <DatePicker 
            label = "Deadline" 
            value = {date}
            onChange = {e => sendDate(e)}
            renderInput = {(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      );
  }