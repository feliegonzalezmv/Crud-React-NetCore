import React, { useState } from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import EditForm from './EditForm';
import { ValidateCompany } from './ValidateCompany';

export const MasterForm = () => {
  const [data, setData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Container maxWidth={'sm'}>
      <Box marginBottom={5}>
        <Typography variant={'h4'}>CRUD Empresas</Typography>
      </Box>

      {data ? (
        <EditForm
          data={data}
          setData={setData}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
        />
      ) : (
        <ValidateCompany setData={setData} />
      )}
    </Container>
  );
};
