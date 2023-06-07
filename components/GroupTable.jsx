'use client'

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

export default function GroupTable({props}){
    const [tableData, setTableData] = useState(props)
    const [visible, setVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0)
    const [selectedName, setSelectedName] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const [selectedIsActive, setIsActive] = useState(0)
    const toast = useRef(null);

    const show = (isSuccess) => {
        if (isSuccess){
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Данные изменены', life: 3000 });
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Изменение данных не произведено', life: 3000 });
        }
    };

    const showDialog = (data) => {
        setSelectedId(data.id)
        setSelectedName(data.name)
        setSelectedValue(data.value)
        setIsActive(data.isActive)
        setVisible(true)
    }

    const deactivateOrActivate = () =>{
        fetch("api/drc/deactivateOrActivate" , {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    "id": selectedId,
                    "isActive": selectedIsActive
                })
            }).then(
            function(response){
                if (response.status !== 200){
                    show(false)
                    console.error("Ошибка обновление данных: " + response.status);
                } else {
                    response.json().then(function(data){
                       show(data.success)
                    })
                }
            }
        ).catch(function(err) {
            show(false)
            console.error('Fetch Error :-S', err);  
        })

    } 

    return (
        <div className="card">
            <DataTable value={tableData} selectionMode="single" onContextMenuSelectionChange={(e) => showDialog(e.value)} header="Список групп выбора" tableStyle={{ minWidth: '60rem' }}>
                <Column sortable field="name" header="Наименование" ></Column>
                <Column sortable field="value" header="Значение"></Column>
                <Column sortable field="isActive" header="Активирован" ></Column>
            </DataTable>
            <Dialog header="Редактирование группы" visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className='flex flex-row gap-3'>
                    <InputText placeholder="Название группы" style={{ width: '100%' }} value={selectedName} onChange={(e) => { setSelectedName(e.target.value)}}></InputText>
                    <InputText placeholder="Логин" style={{ width: '100%' }} value={selectedValue} onChange={(e) => { setSelectedValue(e.target.value)}}></InputText>
                </div>
                <div className='flex flex-row gap-3 pt-3 items-center content-center'>
                    <Button style={{ width: '100%' }} severity="success">Изменить данные</Button>
                    <Button style={{ width: '100%' }} severity="info" onClick={deactivateOrActivate}>{selectedIsActive == 1 ? "Деактивировать" : "Активировать"}</Button>
                </div>
            </Dialog>
            <Toast ref={toast} />
        </div>
    );
}