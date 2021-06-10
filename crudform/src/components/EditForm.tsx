import * as React from 'react';

import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  Checkbox,
  FormControlLabel,
  TextField,
  Grid,
} from '@material-ui/core';

const typeDocuments = [
  { label: 'Cédula', value: 'C' },
  { label: 'NIT', value: 'NIT' },
  { label: 'Cédula extrangería', value: 'CE' },
  { label: 'Tarjeta de identidad', value: 'TI' },
];

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <InputLabel>Identification Type</InputLabel>
        <Select required labelId="label" fullWidth id="select" value={'C'}>
          {typeDocuments.map(({ label, value }: any) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="identification"
          name="identification"
          label="Identification number"
          type="number"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="companyName"
          name="companyName"
          label="Company name"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="secondName"
          name="secondName"
          label="Second Name"
          fullWidth
          autoComplete="family-name"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstLastName"
          name="firstLastName"
          label="First last name"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="secondLastName"
          name="secondLastName"
          label="Second last name"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="email"
          name="email"
          label="E-mail"
          fullWidth
          autoComplete="shipping address-line1"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              name="autorizeSendMessagesCellphone"
              value="yes"
            />
          }
          label="I authorize the sending of messages to the cell phone provided"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              name="autorizeSendMessagesEmail"
              value="yes"
            />
          }
          label="I authorize messages to be sent to the following e-mail address"
        />
      </Grid>
      <Grid item xs={8} direction="column"></Grid>
      <Grid item xs={4} sm={3}>
        <Button variant="outlined" color="primary">
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
}
