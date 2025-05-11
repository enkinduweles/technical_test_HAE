import type { RootProps } from './type';

export function Root({ children }: RootProps) {
  return (
    <div className="flex flex-col border-1 border-stone-500 rounded-xl p-4 shadow-md sm:col-span-6 md:col-span-4 bg-white">
      {children}
    </div>
  );
}
