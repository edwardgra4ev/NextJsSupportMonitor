import { getDispatchersTableUpdateInterval, setDispatchersTableUpdateInterval } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function PUT(req, {params}) {
    let success = false
    if (params && Number(params.seconds)){
        await setDispatchersTableUpdateInterval(Number(params.seconds))
        const result = await getDispatchersTableUpdateInterval()
        if(result && result == Number(params.seconds)){
            success = true
        }
    }
    return NextResponse.json({success: success})
}