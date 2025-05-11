import reactLogo from '/react.svg';

export function Header() {
  return (
    <header className="w-full h-[55px] px-4 py-2 border-b-1 border-b-stone-500 bg-[#3B3E42]">
      <div className="flex items-center gap-4">
        <img src={reactLogo} className="logo" alt="ReactJs logo" />
        <h1 className="text-white">Technical Test - List of Movies</h1>
      </div>
    </header>
  );
}
