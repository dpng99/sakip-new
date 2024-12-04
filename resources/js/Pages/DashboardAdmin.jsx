import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Container, Typography } from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const DashboardAdmin = ({ dataKejari }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);

  const rows = dataKejari.map((item, index) => ({
    id: index + 1,
    satkernama: item.satkernama.replace(/_/g, ' '),
    id_approved: item.id_approved,
    id_otentikasi_tw1: item.id_otentikasi_tw1,
    id_otentikasi_tw2: item.id_otentikasi_tw2,
    id_otentikasi_tw3: item.id_otentikasi_tw3,
    id_otentikasi_tw4: item.id_otentikasi_tw4,
    kep_filesurat: item.kep_filesurat,
    renstra_satker: item.renstra_satker,
    renja_satker: item.renja_satker,
    pk_satker: item.pk_satker,
    iku_satker: item.iku_satker,
    dipa_satker: item.dipa_satker,
    renaksi_satker: item.renaksi_satker,
    lkjip_satker: item.lkjip_satker,
    status_capaian_kinerja: item.status_capaian_kinerja,
  }));

  useEffect(() => {
    const filteredData = rows.filter((row) =>
      row.satkernama.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRows(filteredData);
  }, [searchText, rows]);

  const columns = [
    { field: 'satkernama', headerName: 'Nama Satker', flex: 1, minWidth: 150 },
    {
      field: 'kep_filesurat',
      headerName: 'Kep',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'renstra_satker',
      headerName: 'Renstra',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'renja_satker',
      headerName: 'Renja',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'pk_satker',
      headerName: 'PK',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'iku_satker',
      headerName: 'IKU',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'dipa_satker',
      headerName: 'DIPA',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'renaksi_satker',
      headerName: 'Renaksi',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    {
      field: 'lkjip_satker',
      headerName: 'LKJIP',
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />,
    },
    { field: 'status_capaian_kinerja', headerName: 'Status Capaian Kinerja', flex: 1, minWidth: 200 },
  ];

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Container maxWidth="sm" className="m-3">
        <Typography variant="h6">Pencarian dengan Nama Satker</Typography>
        <TextField
          label="Search by Satker Name"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Container>
      <Container
        maxWidth="lg"
        className="bg-gray-200 overflow-hidden shadow-sm sm:rounded-lg p-5"
      >
        <DataGrid
          autoHeight
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 20, 50]}
          density="compact"
        />
      </Container>
    </AuthenticatedLayout>
  );
};

export default DashboardAdmin;
