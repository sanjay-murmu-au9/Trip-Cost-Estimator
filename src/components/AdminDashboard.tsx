import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface VisitStats {
  totalVisits: number;
  dailyVisits: { [key: string]: number };
  lastVisit: string;
}

export const AdminDashboard = () => {
  const [stats, setStats] = useState<VisitStats>({
    totalVisits: 0,
    dailyVisits: {},
    lastVisit: '',
  });

  useEffect(() => {
    // Load stats from localStorage
    const loadStats = () => {
      const storedStats = localStorage.getItem('visitStats');
      if (storedStats) {
        setStats(JSON.parse(storedStats));
      }
    };
    loadStats();
  }, []);

  const clearStats = () => {
    localStorage.removeItem('visitStats');
    setStats({
      totalVisits: 0,
      dailyVisits: {},
      lastVisit: '',
    });
  };

  const getDailyVisitsArray = () => {
    return Object.entries(stats.dailyVisits)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Visits</h3>
          <p className="text-3xl font-bold">{stats.totalVisits}</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Today's Visits</h3>
          <p className="text-3xl font-bold">
            {stats.dailyVisits[new Date().toISOString().split('T')[0]] || 0}
          </p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Last Visit</h3>
          <p className="text-lg">{new Date(stats.lastVisit).toLocaleString()}</p>
        </Card>
      </div>

      <div className="mb-4">
        <Button variant="destructive" onClick={clearStats}>
          Clear Statistics
        </Button>
      </div>

      <Card className="p-4">
        <h3 className="text-xl font-bold mb-4">Daily Visit History</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Visits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getDailyVisitsArray().map(({ date, count }) => (
              <TableRow key={date}>
                <TableCell>{new Date(date).toLocaleDateString()}</TableCell>
                <TableCell>{count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};