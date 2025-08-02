import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* Bar Chart: Revenue Trends */}
      <div className="bg-card text-card-foreground p-4 rounded-xl shadow-sm border lg:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>

      {/* Top Courses List */}
      <div className="bg-card text-card-foreground p-4 rounded-xl shadow-sm border">
        <CardList title="Top Courses" />
      </div>

      {/* Pie Chart: Browser Usage or Course Categories */}
      <div className="bg-card text-card-foreground p-4 rounded-xl shadow-sm border">
        <AppPieChart />
      </div>

      {/* Todo List */}
      <div className="bg-card text-card-foreground p-4 rounded-xl shadow-sm border">
        <TodoList />
      </div>

      {/* Area Chart: User Engagement / Subscription Growth */}
      <div className="bg-card text-card-foreground p-4 rounded-xl shadow-sm border lg:col-span-2 2xl:col-span-2">
        <AppAreaChart />
      </div>

      {/* Recent Subscriptions or Transactions */}
      <div className="bg-card text-card-foreground p-4 rounded-xl shadow-sm border">
        <CardList title="Recent Subscriptions" />
      </div>
    </div>
  );
};

export default Homepage;
