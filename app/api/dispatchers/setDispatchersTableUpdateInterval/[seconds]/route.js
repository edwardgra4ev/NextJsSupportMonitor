import { setDispatchersTableUpdateInterval, Upda } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function GET(req, {params}) {
    if (params && Number(params.seconds)){
        await setDispatchersTableUpdateInterval(Number(params.seconds))
        return NextResponse.json({success: true})
    }
    return NextResponse.json({success: false})
}