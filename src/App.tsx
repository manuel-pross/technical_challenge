import DataTable from "@/components/customTable";
import SearchField from "@/components/searchField";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchField />
      <DataTable />
    </QueryClientProvider>
  );
}

export default App;
