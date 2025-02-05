import DataTable from "@/components/customTable";
import SearchField from "@/components/searchField";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="block py-5 md:flex md:flex-col md:items-center md:gap-3">
        <div className="flex justify-center">
          <SearchField />
        </div>
        <DataTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
