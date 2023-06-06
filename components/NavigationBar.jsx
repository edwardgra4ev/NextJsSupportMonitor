'use client'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import GitButton from './GitButton';

export default function NavigationBar() {
    const items = [
        {
            label: 'Главная', 
            url: "/",
        },
        {
            label: 'ДРК',
            items: [
                { 
                    label: 'Новый монитор',
                    url: '/drc/monitor_new'
                }, 
                {
                        label: 'Старый монитор',
                        url: '/drc/monitor_old'
                }
            ]
        },
        {
            label: 'Диспетчера',
            url: '/dispatchers'
        },
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40px" className="w-14"></img>;
    const end = <GitButton/>

    return (
        <div className="card pb-6">
            <Menubar model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" />
        </div>
    )
}