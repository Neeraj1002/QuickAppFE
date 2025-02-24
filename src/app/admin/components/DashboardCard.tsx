import { Card, CardContent, CardHeader, CardTitle } from "@/app/admin/components/ui/Card";

interface DashboardCardProps {
  title: string;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => {
  return (
    <Card className="bg-white shadow-md rounded-lg p-4 border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
