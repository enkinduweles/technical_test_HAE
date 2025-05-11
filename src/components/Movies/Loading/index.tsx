export function Loading() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex space-x-2">
        <div
          className="w-3 h-3 bg-stone-500 rounded-full animate-pulse"
          style={{ animationDelay: '0.1s', animationDuration: '0.80s' }}
        ></div>
        <div
          className="w-3 h-3 bg-stone-500 rounded-full animate-pulse"
          style={{ animationDelay: '0.2s', animationDuration: '0.80s' }}
        ></div>
        <div
          className="w-3 h-3 bg-stone-500 rounded-full animate-pulse"
          style={{ animationDelay: '0.3s', animationDuration: '0.80s' }}
        ></div>
      </div>
    </div>
  );
}
