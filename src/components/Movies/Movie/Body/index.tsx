import type { BodyProps } from './type';

export function Body({ id, genre }: BodyProps) {
  return (
    <div>
      <div className="flex gap-2">
        <p className="font-bold text-[#3B3E42]">Id:</p>
        <p className=" text-text-[#3B3E42]">{id}</p>
      </div>
      <div className="flex gap-2">
        <p className=" font-bold text-[#3B3E42]">Genre:</p>
        <p className=" text-text-[#3B3E42]">{genre}</p>
      </div>
    </div>
  );
}
