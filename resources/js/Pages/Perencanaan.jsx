import React,{useState, useEffect} from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container, TextField, Typography, Button, Grid2, Tabs, Tab } from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, usePage } from '@inertiajs/react';

const Perencanaan = ({selectedYear}) => {
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setData('id_periode', selectedYear);
    
  }, [selectedYear]);
  const { data, setData, post, errors } = useForm({
    id_periode: selectedYear,
    id_filename: null,
    id_pagu: '',  
    id_gakyankum: '',
    id_dukman: '',
    dipa_file: null,
    iku_file: null,
    lakip_file: null,
    renaksi_file: null,
    renja_file: null,
    keputusan_file: null,
  });
 
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'dipa_file' || name === 'iku_file' || name === 'lakip_file' || name === 'renaksi_file' || name === 'renja_file' || name === 'keputusan_file') {
      setData(name, files[0]); // Handle file input
    } else {
      setData(name, value);
    }
  };
  const handleSubmitDipa = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeDipa'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };
  const handleSubmitIku = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeIku'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };
  const handleSubmitRenstra = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeRenstra'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };
  const handleSubmitRenja = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeRenja'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };
  const handleSubmitLakip = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeLakip'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };

  const handleSubmitRenaksi = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeRenaksi'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };
  const handleSubmitKeputusan = (e) => {
    e.preventDefault();
    post(route('data-perencanaan.storeKeputusan'), {
      forceFormData: true, // Ensure form is sent as FormData to handle file upload
    });
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Data Perencanaan Satuan Kerja
        </h2>
      }
    >
      <Container maxWidth="lg">
        <Typography variant='h4'>
         Input Data Perencanaan {selectedYear}
        </Typography>
        <Accordion className='m-3'>
          <AccordionSummary>
            <Typography variant="h6">Input Data Dipa Satuan Kerja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmitDipa} encType="multipart/form-data">
              <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_periode"
                    label="Periode ID"
                    fullWidth
                    variant="outlined"
                    value={data.id_periode}
                    onChange={handleChange}
                    error={!!errors.id_periode}
                    helperText={errors.id_periode}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_pagu"
                    label="Pagu"
                    fullWidth
                    variant="outlined"
                    value={data.id_pagu}
                    onChange={handleChange}
                    error={!!errors.id_pagu}
                    helperText={errors.id_pagu}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_gakyankum"
                    label="Gakyankum"
                    fullWidth
                    variant="outlined"
                    value={data.id_gakyankum}
                    onChange={handleChange}
                    error={!!errors.id_gakyankum}
                    helperText={errors.id_gakyankum}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_dukman"
                    label="Dukman"
                    fullWidth
                    variant="outlined"
                    value={data.id_dukman}
                    onChange={handleChange}
                    error={!!errors.id_dukman}
                    helperText={errors.id_dukman}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    name="dipa_file"
                    type="file"
                    accept="application/pdf"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    error={!!errors.dipa_file}
                    helperText={errors.dipa_file || 'Upload a PDF file for Dipa'}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </AccordionDetails>
        </Accordion>
        <Accordion className='m-3'>
          <AccordionSummary>
            <Typography variant="h6">Input Data IKU Satuan Kerja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmitIku} encType="multipart/form-data">
              <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_periode"
                    label="Periode ID"
                    fullWidth
                    variant="outlined"
                    value={data.id_periode}
                    onChange={handleChange}
                    error={!!errors.id_periode}
                    helperText={errors.id_periode}
                  />
                </Grid2>                
                <Grid2 item xs={12}>
                  <TextField
                    name="iku_file"
                    type="file"
                    accept="application/pdf"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    error={!!errors.iku_file}
                    helperText={errors.iku_file || 'Upload a PDF file for Dipa'}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </AccordionDetails>
        </Accordion>
        <Accordion className='m-3'>
          <AccordionSummary>
            <Typography variant="h6">Input Data Lakip Satuan Kerja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmitLakip} encType="multipart/form-data">
              <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_periode"
                    label="Periode ID"
                    fullWidth
                    variant="outlined"
                    value={data.id_periode}
                    onChange={handleChange}
                    error={!!errors.id_periode}
                    helperText={errors.id_periode}
                  />
                </Grid2>                
                <Grid2 item xs={12}>
                  <TextField
                    name="lakip_file"
                    type="file"
                    accept="application/pdf"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    error={!!errors.lakip_file}
                    helperText={errors.lakip_file || 'Upload a PDF file for Dipa'}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </AccordionDetails>
        </Accordion>
        <Accordion className='m-3'>
          <AccordionSummary>
            <Typography variant="h6">Input Data Rencana Aksi Satuan Kerja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmitRenaksi} encType="multipart/form-data">
              <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_periode"
                    label="Periode ID"
                    fullWidth
                    variant="outlined"
                    value={data.id_periode}
                    onChange={handleChange}
                    error={!!errors.id_periode}
                    helperText={errors.id_periode}
                  />
                </Grid2>                
                <Grid2 item xs={12}>
                  <TextField
                    name="lakip_file"
                    type="file"
                    accept="application/pdf"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    error={!!errors.renaksi_file}
                    helperText={errors.renaksi_file || 'Upload a PDF file for Dipa'}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </AccordionDetails>
        </Accordion>
        <Accordion className='m-3'>
          <AccordionSummary>
            <Typography variant="h6">Input Data Rencana Kerja Satuan Kerja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmitRenja} encType="multipart/form-data">
              <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_periode"
                    label="Periode ID"
                    fullWidth
                    variant="outlined"
                    value={data.id_periode}
                    onChange={handleChange}
                    error={!!errors.id_periode}
                    helperText={errors.id_periode}
                  />
                </Grid2>                
                <Grid2 item xs={12}>
                  <TextField
                    name="lakip_file"
                    type="file"
                    accept="application/pdf"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    error={!!errors.renja_file}
                    helperText={errors.renja_file || 'Upload a PDF file for Dipa'}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </AccordionDetails>
        </Accordion>
        <Accordion className='m-3'>
          <AccordionSummary>
            <Typography variant="h6">Input Data Keputusan Satuan Kerja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmitKeputusan} encType="multipart/form-data">
              <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                  <TextField
                    name="id_periode"
                    label="Periode ID"
                    fullWidth
                    variant="outlined"
                    value={data.id_periode}
                    onChange={handleChange}
                    error={!!errors.id_periode}
                    helperText={errors.id_periode}
                  />
                </Grid2>                
                <Grid2 item xs={12}>
                  <TextField
                    name="lakip_file"
                    type="file"
                    accept="application/pdf"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    error={!!errors.keputusan_file}
                    helperText={errors.keputusan_file || 'Upload a PDF file for Dipa'}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </AccordionDetails>
        </Accordion>
      </Container>
    </AuthenticatedLayout>
  );
};

export default Perencanaan;
