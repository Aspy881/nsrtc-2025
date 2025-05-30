import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <BrowserRouter basename="/nsrtc/">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
