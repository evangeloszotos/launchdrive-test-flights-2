import { Grid, Paper, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface ColorTextFieldProps {
  label: string;
  onInput: (string) => void;
  onValidInput: (string) => void;
  value: string;
}

export const ColorTextFieldUnstyled: React.FC<ColorTextFieldProps> = (props) => {
  const { label, onInput, onValidInput, value, ...other } = props;
  const regex = /^#([0-9a-fA-F]{3}){1,2}$/;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);
    if (event.target.value.match(regex)) {
      onValidInput(event.target.value);
    }
  };

  return (
    <Grid {...other} container={true}>
      <TextField label={label} value={value} onChange={handleChange} size="small" />
      <Paper
        elevation={0}
        sx={{
          backgroundColor: value?.match(regex) ? value : '#000',
        }}
      />
    </Grid>
  );
};

export const ColorTextField = styled(ColorTextFieldUnstyled)`
  width: 100%;
  height: 100%;

  & .MuiTextField-root {
    margin-right: 0.625rem;
  }

  & .MuiPaper-root {
    width: 40px;
    height: 40px;
  }
`;
export default ColorTextField;
