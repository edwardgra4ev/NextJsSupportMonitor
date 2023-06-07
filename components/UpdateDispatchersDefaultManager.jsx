'use client'

import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


export default function UpdateDispatchersDefaultManager({defaultUser}){
    const [user, setUser] = useState(defaultUser)
    const toast = useRef(null);

    const show = (isSuccess) => {
        if (isSuccess){
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Данные изменены', life: 3000 });
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Изменение данных не произведено', life: 3000 });
        }
    };

    const updateUser= () => {
        fetch("api/dispatchers/setDefaultUser/" + user, {method:"PUT"}).then(
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
        <div className='w-1/3'>
            <Toast ref={toast} />
            <p className='text-gray-300'>Главный диспетчер</p>
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className='pi pi-user'/>
                </span>
                <InputText placeholder="Логин пользователя" value={user} onChange={(e) => setUser(e.target.value)} tooltip="По данному логину собирается статистика" tooltipOptions={{ position: 'bottom' }}/>
                <span className="p-inputgroup-addon">
                    <Button onClick={updateUser}>Обновить</Button>
                </span>
            </div>
        </div>
    )
}