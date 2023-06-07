import { getAllGroups } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function GET(req) {
    let success = false

    const result = await getAllGroups()
    if (result){
        success = true
    }

    return NextResponse.json({success: false, result: result})
}