import React, { useState, useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import EditForm from './EditForm';
import { ValidateDocument } from './ValidateDocument';
import Context from './context/appContext';

export const MasterForm = () => {
  const { isValid }: any = useContext(Context);

  return (
    <Container maxWidth={'sm'}>
      <Typography variant={'h4'}>CRUD Company</Typography>
      {isValid ? <EditForm /> : <ValidateDocument />}
    </Container>
  );
};
