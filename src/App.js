import "./App.css";
import { Header } from "./components";
import { ProductPage } from "./pages";

function App() {
  return (
    <div className="App">
      {/* 
    
    <Header />
    <Sidebar />
    <ProductListing />
    
    */}

      <Header />
      <ProductPage />
    </div>
  );
}

export default App;
