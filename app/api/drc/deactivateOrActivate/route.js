import { getAllGroups } from '@/db/setting';
import { NextResponse } from 'next/server';


export async function POST(req) {
    console.log(req.body)

    return NextResponse.json({success: false})
}