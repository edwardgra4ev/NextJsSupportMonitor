import DispatchersTable from "@/components/DispatchersTable";
import { getDispatchersTableUpdateInterval } from "@/db/setting";


export default async function Dispatchers(){
    const props = {
        seconds: await getDispatchersTableUpdateInterval(),
        tableData: [
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
        ]
    }
    return <div className="w-screen flex justify-center items-center gap-3">
        <DispatchersTable props={props}/>
    </div>
}