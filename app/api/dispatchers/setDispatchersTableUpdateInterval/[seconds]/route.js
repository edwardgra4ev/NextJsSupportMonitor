import { setDispatchersTableUpdateInterval, Upda } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function GET(req, {params}) {
    let success = false;
    if (params && Number(params.seconds)){
        console.log(Number(params.seconds))
        success = await setDispatchersTableUpdateInterval(Number(params.seconds))
    }
    return NextResponse.json({success: Number(params.seconds)})
}