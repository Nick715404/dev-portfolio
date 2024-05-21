'use client';

import { useScroll } from "framer-motion";

type TUseMotionScrollProps = {
  ref: any
}

const useMotionScroll = ({ ref }: TUseMotionScrollProps) => {
  return useScroll({
    offset: ['0 1', '1.33 1'],
    target: ref,
  })
};

export { useMotionScroll };