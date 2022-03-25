import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => setToggle((prevState) => !prevState);
  return { toggle, toggler };
}
