import DataTable from "@/components/dataTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataTable />
    </QueryClientProvider>
  );
}

export default App;
