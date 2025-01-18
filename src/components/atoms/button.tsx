import { useRouter } from 'next/navigation';
import React from 'react';

type Btn = {
  name: string;
  type?: string;
} & ({ func: () => void; link?: never } | { link: string; func?: never });

const CustomButton = ({ btn }: { btn: Btn }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (btn.func) btn.func();
        else if (btn.link) router.push(btn.link);
      }}
      className={`capitalize text-2xl font-bold px-4 py-1 min-w-48 lg:min-w-40 border rounded-md border-primary  text-primary hover:bg-primaryLight hover:text-white hover:border-primaryLight transition-all duration-100`}
    >
      {btn.name}
    </button>
  );
};

export default CustomButton;
