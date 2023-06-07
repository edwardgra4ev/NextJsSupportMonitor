import { getDrcTableUpdateInterval, setDrcTableUpdateInterval, Upda } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function PUT(req, {params}) {
    let success = false
    if (params && Number(params.seconds)){
        await setDrcTableUpdateInterval(Number(params.seconds))
        const result = await getDrcTableUpdateInterval()
        if (result && result == Number(params.seconds)){
            success = true
        }
    }
    return NextResponse.json({success: success})
}