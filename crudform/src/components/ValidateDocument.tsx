import React, { useContext, useState } from 'react';
import {
  Button,
  Grid,
  InputLabel,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import Context from './context/appContext';
import { useFetch } from '../hooks/useFetch';
import { URLS } from '../Constans/appURLS';

export const ValidateDocument = () => {
  const { isValid, setIsValid }: any = useContext(Context);

  const [url, setUrl] = useState('');
  const [id, setId] = useState('');

  const { data, loading }: any = useFetch(url);

  const handleInputClick = () => {
    setUrl(`${URLS().getValidCompany}${id}`);
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InputLabel>Type NIT: </InputLabel>
        <TextField
          required
          onChange={({ target }) => {
            setId(target.value);
            setUrl('');
          }}
          id="identification"
          name="identification"
          label="NIT"
          type="number"
        />
      </Grid>

      <Grid item xs={12} justify={'flex-end'}>
        <Button onClick={handleInputClick} variant="outlined" color="primary">
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
};
