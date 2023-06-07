'use client'

import React, { useRef, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


export default function UpdateTimer({defaultSeconds, url, title, }){
    const [seconds, setSeconds] = useState(defaultSeconds)
    const toast = useRef(null);

    const show = (isSuccess) => {
        if (isSuccess){
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Данные изменены', life: 3000 });
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Изменение данных не произведено', life: 3000 });
        }
    };

    const updateTime = () => {
        fetch(url + seconds, {method: "PUT"}).then(
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
            <p className='text-gray-300'>{title}</p>
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className='pi pi-stopwatch'/>
                </span>
                <InputNumber placeholder="Время обновления" value={seconds} onChange={(e) => setSeconds(e.value)} tooltip="Время указывается в секундах" tooltipOptions={{ position: 'bottom' }}/>
                <span className="p-inputgroup-addon">
                    <Button onClick={updateTime}>Обновить</Button>
                </span>
            </div>
        </div>
    )
}