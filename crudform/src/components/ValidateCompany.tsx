import React, { useState } from 'react';
import {
  Button,
  Grid,
  InputLabel,
  TextField,
  CircularProgress,
} from '@material-ui/core';

import { URLS } from '../Constans/appURLS';
import { getData } from '../helpers/getData';
import { Alert } from '@material-ui/lab';

export const ValidateCompany = ({ setData }: any) => {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputClick = async () => {
    setAlertMessage('');
    setLoading(true);
    await getInfo();
    setLoading(false);
  };

  const getInfo = async () => {
    try {
      const res = await getData(`${URLS().getValidCompany}${id}`);

      const errorMessages = res.message
        ? res.message
        : res.title
        ? res.title
        : '';

      if (errorMessages) {
        setAlertMessage(errorMessages);
        return;
      }

      const data = await getData(`${URLS().getCompany}${res.identification}`);

      if (data) {
        setData(data);
      }
    } catch (error) {}
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InputLabel>Ingresa el nit: </InputLabel>
        <TextField
          required
          onChange={({ target }: any) => {
            setId(target.value);
          }}
          id="identification"
          name="identification"
          label="NIT"
          type="number"
        />
      </Grid>

      <Grid item xs={12} justify={'flex-end'}>
        <Button
          disabled={!id}
          onClick={handleInputClick}
          variant="outlined"
          color="primary"
        >
          Enviar
        </Button>
      </Grid>

      {alertMessage && (
        <Grid item xs={12} justify={'flex-end'}>
          <Alert severity="error">{alertMessage}</Alert>
        </Grid>
      )}
    </Grid>
  );
};
