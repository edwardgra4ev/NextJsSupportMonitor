'use client'

import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import Link from 'next/link';

export default function PageCard({ title, subTitle, description, url}) {
    return (
        <Link href={url}>
            <Card title={title} subTitle={<Tag severity="info" value={subTitle}/>}className="h-60" >
                <p className="m-0">
                    {description}
                </p>
            </Card>
        </Link>
    )
}