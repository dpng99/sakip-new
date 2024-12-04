import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
const SakipKejatiTable = ({ dataCapaian }) => {
  const rows = dataCapaian.map((item, index) => ({
    id: index + 1,
    nama_bidang: item.nama_bidang,
    nama_saspro: item.nama_saspro,
    indikator: item.indikator,
    target: item.target,
    realisasi_tw1: item.realisasi_tw1,
    realisasi_tw2: item.realisasi_tw2,
    realisasi_tw3: item.realisasi_tw3,
    realisasi_tw4: item.realisasi_tw4,

  }));
  const columns = [
    {field : 'nama_bidang', headerName: 'Nama Bidang', width: 150},
    {field : 'nama_saspro', headerName: 'Nama Saspro', width: 150},
    {field : 'indikator', headerName: 'Nama Indikator', width: 150},
    {field : 'target', headerName: 'Target Kegiatan', width: 150},
    {field : 'realisasi_tw1', headerName: 'Realisasi Tw1', width: 150},
    {field : 'realisasi_tw2', headerName: 'Realisasi Tw2', width: 150},
    {field : 'realisasi_tw3', headerName: 'Realisasi Tw3', width: 150},
    {field : 'realisasi_tw4', headerName: 'Realisasi Tw4', width: 150}
]
  return (
    
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        autoHeight // Fix the casing
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } }, // pageSize handled here
        }}
        pageSizeOptions={[10, 20, 50]}
        checkboxSelection
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
    </div>
  );
};


export default SakipKejatiTable