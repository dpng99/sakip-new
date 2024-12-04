import ApplicationLogo from '@/Components/ApplicationLogo';
import Logo from  '../../Images/kejaksaan.png' ;
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Tooltip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Dashboard as DashboardIcon,
    TableChart as DataDipaIcon,
    Assessment as DataIkuIcon,
    ListAlt as DataPerencanaanIcon,
} from '@mui/icons-material';

export default function Sidebar({ header, children }) {
    const user = usePage().props.auth.user;

    const [selectedYear, setSelectedYear] = useState(() => {
        const savedYear = sessionStorage.getItem('selectedYear');
        return savedYear ? parseInt(savedYear, 10) : new Date().getFullYear();
    });

    const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar expanded by default

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    '& .MuiDrawer-paper': {
                        width: sidebarOpen ? '240px' : '60px',
                        transition: 'width 0.3s ease',
                        overflowX: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#343a40',
                        color: '#fff',
                    },
                }}
            >
                {/* Logo and Toggle Button */}
                <div className="flex items-center justify-between p-3">
                    {sidebarOpen && (
                        <div className="flex items-center gap-3">
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ height: '50px', width: '50px' }}
                            />
                            <h4 className="text-white">Sinergi SAKIP</h4>
                        </div>
                    )}
                    <IconButton onClick={toggleSidebar} sx={{ color: '#fff' }}>
                        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>

                {/* User Info */}
                {sidebarOpen && (
                    <div className="p-4 text-center bg-yellow-500">
                        <img
                            src={Logo}
                            alt="User Avatar"
                            className="rounded-full mx-auto mb-2"
                            style={{ width: '60px', height: '60px' }}
                        />
                        <h5 className="text-white">{user.satkernama.replace(/_/g, ' ') }</h5>
                        <p className="text-white text-sm">ID Satker: {user.id_satker || '888881'}</p>
                    </div>
                )}

                {/* Sidebar Navigation */}
                <List>
                    {/* Dashboard */}
                    <Tooltip title="Dashboard" placement="right" disableHoverListener={sidebarOpen}>
                        <ListItem button component={Link} href={route('dashboard')}>
                            <ListItemIcon>
                                <DashboardIcon sx={{ color: '#fff' }} />
                            </ListItemIcon>
                            {sidebarOpen && <ListItemText primary="Dashboard" />}
                        </ListItem>
                    </Tooltip>

                    {/* Data Dipa */}
                    <Tooltip title="Data Dipa" placement="right" disableHoverListener={sidebarOpen}>
                        <ListItem button component={Link} href={route('data-dipa')}>
                            <ListItemIcon>
                                <DataDipaIcon sx={{ color: '#fff' }} />
                            </ListItemIcon>
                            {sidebarOpen && <ListItemText primary="Data Dipa" />}
                        </ListItem>
                    </Tooltip>

                    {/* Data Iku */}
                    <Tooltip title="Data Iku" placement="right" disableHoverListener={sidebarOpen}>
                        <ListItem button component={Link} href={route('data-iku')}>
                            <ListItemIcon>
                                <DataIkuIcon sx={{ color: '#fff' }} />
                            </ListItemIcon>
                            {sidebarOpen && <ListItemText primary="Data Iku" />}
                        </ListItem>
                    </Tooltip>

                    {/* Data Perencanaan */}
                    <Tooltip title="Data Perencanaan" placement="right" disableHoverListener={sidebarOpen}>
                        <ListItem button component={Link} href={route('data-perencanaan')}>
                            <ListItemIcon>
                                <DataPerencanaanIcon sx={{ color: '#fff' }} />
                            </ListItemIcon>
                            {sidebarOpen && <ListItemText primary="Data Perencanaan" />}
                        </ListItem>
                    </Tooltip>

                    {/* Dashboard Admin Kejati */}
                    <Tooltip
                        title="Dashboard Admin Kejati"
                        placement="right"
                        disableHoverListener={sidebarOpen}
                    >
                        <ListItem button component={Link} href={route('dashboard-admin')}>
                            <ListItemIcon>
                                <DashboardIcon sx={{ color: '#fff' }} />
                            </ListItemIcon>
                            {sidebarOpen && <ListItemText primary="Dashboard Admin Kejati" />}
                        </ListItem>
                    </Tooltip>
                </List>

                {/* Year Selector */}
                <div className="p-3 mt-auto">
                    {sidebarOpen ? (
                        <FormControl fullWidth>
                            <InputLabel id="year-select-label">Pilih Tahun</InputLabel>
                            <Select
                                labelId="year-select-label"
                                id="year-select"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                {[2020, 2021, 2022, 2023, 2024].map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <Tooltip title="Pilih Tahun" placement="right">
                            <FormControl fullWidth>
                                <Select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    sx={{
                                        '& .MuiSelect-select': {
                                            paddingLeft: '8px',
                                            paddingRight: '8px',
                                        },
                                    }}
                                >
                                    {[2020, 2021, 2022, 2023, 2024].map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Tooltip>
                    )}
                </div>
            </Drawer>

            {/* Main Content */}
            <div className="flex-1">
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
                <main>
                    <div className="p-4">{children}</div>
                </main>
            </div>
        </div>
    );
}
