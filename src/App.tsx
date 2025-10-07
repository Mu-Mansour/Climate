import "./App.css";
import { AppRouter } from "./components/ui/AppRouter";
import { ThemeProvider } from "./context/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
