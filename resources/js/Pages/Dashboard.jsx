import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Container } from '@mui/material';
import SakipKejatiTable from '@/Components/SakipKejatiTable';
export default function Dashboard({dataCapaian}) {
 
  console.log(dataCapaian);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <Container
                    maxWidth="lg"
                    className="bg-white-200 overflow-hidden shadow-sm sm:rounded-lg p-5 m-3"
                >
            <SakipKejatiTable dataCapaian={dataCapaian} />
            </Container>
                  
        </AuthenticatedLayout>
    );
}
