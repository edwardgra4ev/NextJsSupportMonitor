import { NextResponse } from 'next/server';


export async function GET() {
    return NextResponse.json([
        {
            fio: "Грачев Эдуард Александрович",
            inquiries: 30,
            outfits: 50,
            calls: 10,
            points: 100
        },
        {
            fio: "Грачев Эдуард Александрович",
            inquiries: 30,
            outfits: 50,
            calls: 10,
            points: 100
        },
        {
            fio: "Грачев Эдуард Александрович",
            inquiries: 30,
            outfits: 50,
            calls: 10,
            points: 100
        }
    ])
}