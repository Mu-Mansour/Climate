import "./App.css";
import { AppRouter } from "./components/ui/AppRouter";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
