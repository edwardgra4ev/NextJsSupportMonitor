import { getDispatchersUser, setDispatchersUser } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function PUT(req, {params}) {
    let success = false
    if (params && params.user){
        await setDispatchersUser(params.user)
        const result = await getDispatchersUser();
        if (result && result == params.user){
            success = true
        }
    }
    return NextResponse.json({success: success})
}