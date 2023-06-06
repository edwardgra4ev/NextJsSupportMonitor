import PageCard from "@/components/PageCard";

export default function Home() {
  return (
    <div className="w-screen flex justify-center items-center gap-3">
      <div className="grid grid-cols-3 content-center gap-4 ml-5 mr-5">
        <PageCard 
          title="Новый монитор нарядов" 
          subTitle="ДРК" 
          description="Добавлено еще больше больше новой статистики!"
          url="/drc/monitor_new"
        />
        <PageCard
          title="Старый монитор нарядов" 
          subTitle="ДРК" 
          description="Статистика по выполненным обращениям."
          url="/drc/monitor_old"
        />
        <PageCard 
          title="Монитор диспетчера" 
          subTitle="Диспетчера" 
          description="Статистика по обработанным звонкам и обращениям диспетчера."
          url="/dispatchers"
        />
      </div>
    </div>
  )
}
