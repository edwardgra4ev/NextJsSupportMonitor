

import TabViewConfiguration from "@/components/TabViewConfiguration"
import { getAllGroups, getDispatchersTableUpdateInterval, getDispatchersUser, getDrcTableUpdateInterval } from "@/db/setting"



export default async function Configuration(){
    const props = {
        dispatchers: {
            DispatchersTableUpdateInterval: await getDispatchersTableUpdateInterval(),
            DispatchersUser: await getDispatchersUser()
        },
        drc: {
            DrcTableUpdateInterval: await getDrcTableUpdateInterval(),
            TableData: await getAllGroups()
        }
    }
    return <div className="w-screen pl-10 pr-10">
       <TabViewConfiguration props={props}></TabViewConfiguration>
    </div>
}