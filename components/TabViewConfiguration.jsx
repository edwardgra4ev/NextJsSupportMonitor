'use client'

import { TabView, TabPanel } from 'primereact/tabview';
import UpdateTimer from './UpdateTimer';
import UpdateDispatchersDefaultManager from './UpdateDispatchersDefaultManager';
import GroupTable from './GroupTable';
        
export default function TabViewConfiguration({props}){
    return <div className="card">
    <TabView>
        <TabPanel header="Диспетчера">
            <div className="flex flex-col justify-center items-center gap-12">
                <UpdateTimer 
                    defaultSeconds={props.dispatchers.DispatchersTableUpdateInterval}
                    title="Время обновления таблицы диспетчеров"
                    url="api/dispatchers/setDispatchersTableUpdateInterval/"
                />
                <UpdateDispatchersDefaultManager defaultUser={props.dispatchers.DispatchersUser}/> 
            </div>
        </TabPanel>
        <TabPanel header="ДРК">
        <div className="flex flex-col justify-center items-center gap-12">
                <UpdateTimer
                    defaultSeconds={props.drc.DrcTableUpdateInterval}
                    title="Время обновления таблицы ДРК"
                    url="api/drc/setDrcTableUpdateInterval/"
                />
                <GroupTable props={props.drc.TableData}></GroupTable>
            </div>
        </TabPanel>
    </TabView>
</div>
}