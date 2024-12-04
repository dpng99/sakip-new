import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Container, TextField, Button, Grid, Typography, Alert } from '@mui/material';

const InputSaspro = ({ flash }) => {
  // Form data state
  const [formData, setFormData] = useState({
    link: '',
    id_tahun: '',
    saspro_nama: '',
    saspro_penjelasan: '',
    lingkup: '',
    saspro_new: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post(route('saspro.store'), formData);
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Input Saspro
        </h2>
      }
    >
      <Container>
        <Typography variant="h6" gutterBottom>
          Input Saspro Details
        </Typography>
        

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ID Tahun"
                name="id_tahun"
                value={formData.id_tahun}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Saspro Nama"
                name="saspro_nama"
                value={formData.saspro_nama}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Saspro Penjelasan"
                name="saspro_penjelasan"
                value={formData.saspro_penjelasan}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Lingkup"
                name="lingkup"
                value={formData.lingkup}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Saspro New"
                name="saspro_new"
                type="number"
                value={formData.saspro_new}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </AuthenticatedLayout>
  );
};

export default InputSaspro;
