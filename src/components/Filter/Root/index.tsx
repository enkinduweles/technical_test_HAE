import type { RootProps } from './types';

export function Root({ children }: RootProps) {
  return (
    <div className="flex justify-end relative items-center self-end">
      {children}
    </div>
  );
}
