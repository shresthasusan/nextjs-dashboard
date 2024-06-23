import RevenueChart  from '@/app/ui/dashboard/revenue-chart'

export default function Page() {
    const revenue= [{ month: 'January', revenue: 100 }];
    return <RevenueChart revenue={revenue} />;
}