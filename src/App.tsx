import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Movies } from './components/Movies';
import { useApp } from './hooks/useApp';
import { FilterContextProvider } from './context/FilterContext';
import { Drawer } from './components/Drawer';
import { useDrawerContext } from './context/Drawer';

function App() {
  useApp();
  const { isOpen } = useDrawerContext();

  return (
    <FilterContextProvider>
      <main className="h-screen bg-[#F5F5F3] relative">
        <Header />
        <div className="w-full flex h-[calc(100vh-55px)]">
          {isOpen && <Drawer />}
          <Sidebar />
          <Movies />
        </div>
      </main>
    </FilterContextProvider>
  );
}

export default App;
