import type { TitleProps } from './type';

export function Title({ text }: TitleProps) {
  return (
    <>
      <h4 className="text-xl font-bold text-[#3B3E42] max-w-[200px] truncate">
        {text}
      </h4>
      <hr className=" mb-3 border-stone-500" />
    </>
  );
}
