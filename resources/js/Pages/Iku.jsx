import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import {Typography, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
const Iku = ({iku}) => {
    const row = iku.map((data, index) =>({
        id: index + 1,
        id_satker: data.id_satker,
        tahun: data.id_periode,
        perubahan: data.id_perubahan, 
        namafile: data.id_filename,
        upload: data.tgl_upload,
    }));
    const columns = [
        {field : 'id_satker', headerName: 'ID SATKER', width: 150},
        {field : 'tahun', headerName: 'Tahun Anggaran', width: 150},
        {field : 'perubahan', headerName: 'Perubahan', width: 150},
        {field : 'namafile', headerName: 'File Name', width: 150},
        {field : 'upload', headerName: 'Tanggal Upload', width: 150}
    ]
  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Data IKU Satuan Kerja
        </h2>
    }
    >   <Typography>
            Data IKU
        </Typography>
        <Container maxWidth="lg"
    className='bg-gray-200 overflow-hidden shadow-sm sm:rounded-lg p-5'
    >
      <DataGrid
        autoHeight // Fix the casing
        rows={row}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } }, // pageSize handled here
        }}
        pageSizeOptions={[10, 20, 50]}
        
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: 'outlined',
                size: 'small',
              },
              columnInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              operatorInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: 'outlined',
                  size: 'small',
                },
              },
            },
          },
        }}
      />
    </Container>
    </AuthenticatedLayout>

  )
}

export default Iku