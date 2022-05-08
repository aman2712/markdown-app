import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthScreen from "./screens/AuthScreen";

import EditorScreen from './screens/EditorScreen'
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<EditorScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
