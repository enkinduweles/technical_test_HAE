import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Movies } from './components/Movies';
import { useApp } from './hooks/useApp';
import { Drawer } from './components/Drawer';
import { useDrawerContext } from './context/DrawerContext';

function App() {
  useApp();
  const { isOpen } = useDrawerContext();

  return (
    <main className="h-screen bg-[#F5F5F3] relative">
      <Header />
      <div className="w-full flex h-[calc(100vh-55px)]">
        {isOpen && <Drawer />}
        <Sidebar />
        <Movies />
      </div>
    </main>
  );
}

export default App;
