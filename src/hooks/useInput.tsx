import { ChangeEvent, useState } from 'react';

export default function useInput(initialState: string) {
  const [input, setInput] = useState<any>(initialState);
  console.log(input);

  const handler = (e: ChangeEvent<HTMLInputElement>): any => {
    setInput(e.target.value as string);
  };

  return [input, handler];
}
