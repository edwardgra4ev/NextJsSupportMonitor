'use client'

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useInterval } from 'primereact/hooks';
import { Skeleton } from 'primereact/skeleton';

export default function DispatchersTable({props}){
    const [tableData, setTableData] = useState(props.tableData)
    const [isLoading, setIsLoading] = useState(false)
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [seconds, setSeconds] = useState(props.seconds)
    const [currentSeconds, setCurrentSeconds] = useState(seconds)

    useInterval(
        () => {
            if (currentSeconds <= 0){
                setIsTimerActive(false);
                setIsLoading(true);
                // Получаем данные с сервера
                fetch('api/dispatchers').then(
                    function(response){
                        if (response.status !== 200){
                            console.error("Ошибка получения данных с сервера: " + response.status);
                        } else {
                            response.json().then(function(data){
                                setTableData(data)
                            })
                        }
                    }
                ).catch(function(err) {
                    console.error('Fetch Error :-S', err);  
                })
                setCurrentSeconds(seconds)
                setIsLoading(false)
                setIsTimerActive(true)
            } else {
                setCurrentSeconds(currentSeconds - 1);
            }
        },
        1000,           
        isTimerActive
    );
    

    const header = (
        <div className="flex flex-wrap justify-between gap-2">
            <span className="text-xl text-900 font-bold">Статистика обработанных задач диспетчера</span>
            {   
                isTimerActive && currentSeconds != 0? <p>{currentSeconds}</p> : 
                <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
            }
        </div>
    );

    const footer = `Всего записи ${tableData ? tableData.length : 0}`;

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="card">
            <DataTable value={tableData} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column sortable field="fio" header="ФИО" body={isLoading ? bodyTemplate : null}></Column>
                <Column sortable field="inquiries" header="Обращения" body={isLoading ? bodyTemplate : null}></Column>
                <Column sortable field="outfits" header="Наряды"body={isLoading ? bodyTemplate : null}></Column>
                <Column sortable field="calls" header="Звонки" body={isLoading ? bodyTemplate : null}></Column>
                <Column sortable field="points" header="Очки" body={isLoading ? bodyTemplate : null}></Column>
            </DataTable>
            
        </div>
    );
}