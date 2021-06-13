import React, { useState, useEffect } from 'react';

import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  Checkbox,
  FormControlLabel,
  TextField,
  Grid,
  Box,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { validateInfo } from '../helpers/validateInfo';

import { getPostData } from '../helpers/getData';
import { URLS } from '../Constans/appURLS';

const typeDocuments = [
  { label: 'Cédula', value: 'C' },
  { label: 'NIT', value: 'NIT' },
  { label: 'Cédula extrangería', value: 'CE' },
  { label: 'Tarjeta de identidad', value: 'TI' },
];

export default function EditForm({
  data,
  setData,
  isSubmitting,
  setIsSubmitting,
}: any) {
  const [result, setResult] = useState<any>(null);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = ({ target }: any) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
    setErrors({ ...errors, [target.name]: '' });
  };
  const handleInputChangeCheckBox = ({ target }: any) => {
    setData({
      ...data,
      [target.name]: target.checked,
    });
  };

  useEffect(() => {
    const sendData = async () => {
      setLoading(true);
      const res: any = await getPostData(URLS().getCompany, data);
      console.log(`res`, res);

      if (res.status) {
        setResult(res);
      }

      setLoading(false);
      setIsSubmitting(false);
    };

    if (Object.keys(errors).length === 0 && isSubmitting) {
      sendData();
    }
  }, [errors, isSubmitting, data]);

  const handleSubmit = () => {
    setErrors(validateInfo(data));
    setIsSubmitting(true);
  };

  const resetStates = () => {
    setData(null);
    setIsSubmitting(false);
    setResult(null);
    setErrors({});
  };

  const {
    identification,
    identificationType,
    companyName,
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    email,
    autorizeSendMessagesCellphone,
    autorizeSendMessagesEmail,
  } = data || {};

  return (
    <Box border={0.5} padding={3} margin={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel>Tipo de identificación</InputLabel>
          <Select
            required
            error={errors.identificationType}
            labelId="label"
            name="identificationType"
            onChange={(e: any) => handleInputChange(e)}
            fullWidth
            id="select"
            value={identificationType && identificationType}
          >
            {typeDocuments.map(({ label, value }: any) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            disabled={true}
            error={errors.identification}
            onChange={(e: any) => handleInputChange(e)}
            value={identification && identification}
            id="identification"
            name="identification"
            label="Número identificación"
            type="number"
            helperText={errors.identification}
          />
        </Grid>

        {identificationType === 'NIT' || identificationType === 'CE' ? (
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error={errors.companyName}
              onChange={(e: any) => handleInputChange(e)}
              value={companyName && companyName}
              id="companyName"
              name="companyName"
              label="Nombre compañia"
              helperText={errors.companyName}
              fullWidth
            />
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={(e: any) => handleInputChange(e)}
                value={firstName}
                id="firstName"
                name="firstName"
                label="Primer nombre"
                fullWidth
                error={errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e: any) => handleInputChange(e)}
                value={secondName && secondName}
                id="secondName"
                name="secondName"
                label="Segundo nombre"
                fullWidth
                autoComplete="family-name"
                error={errors.secondName}
                helperText={errors.secondName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={(e: any) => handleInputChange(e)}
                value={firstLastName && firstLastName}
                id="firstLastName"
                name="firstLastName"
                label="Primer apellido"
                fullWidth
                error={errors.firstLastName}
                helperText={errors.firstLastName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e: any) => handleInputChange(e)}
                value={secondLastName && secondLastName}
                id="secondLastName"
                name="secondLastName"
                label="Segundo apellido"
                error={errors.secondLastName}
                helperText={errors.secondLastName}
                fullWidth
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <TextField
            required
            onChange={(e: any) => handleInputChange(e)}
            value={email && email}
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="shipping address-line1"
            error={errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="autorizeSendMessagesCellphone"
                checked={autorizeSendMessagesCellphone}
                onChange={(e) => handleInputChangeCheckBox(e)}
              />
            }
            label="Autorizo ​​el envío de mensajes al celular provisto"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="autorizeSendMessagesEmail"
                checked={autorizeSendMessagesEmail}
                onChange={(e) => handleInputChangeCheckBox(e)}
              />
            }
            label="Autorizo envío de mensajes al correo electrónico"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button onClick={() => resetStates()} variant="outlined">
            Regresar
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button onClick={handleSubmit} variant="outlined" color="primary">
            {loading ? `Enviando...` : `Enviar`}
          </Button>
        </Grid>
        {result && result.status && (
          <Snackbar
            open={result && result.status}
            autoHideDuration={3000}
            onClose={() => setResult(null)}
          >
            <Alert severity="success">{result && result.message}</Alert>
          </Snackbar>
        )}
      </Grid>
    </Box>
  );
}
