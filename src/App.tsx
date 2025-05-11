import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Movies } from './components/Movies';

function App() {
  return (
    <main className="h-screen bg-[#F5F5F3]">
      <Header />
      <div className="w-full flex h-[calc(100vh-55px)] ">
        <Sidebar />
        <Movies />
      </div>
    </main>
  );
}

export default App;
