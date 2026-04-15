import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header />
        <Dashboard />
        <Footer />
      </main>
    </div>
  );
}

export default App;