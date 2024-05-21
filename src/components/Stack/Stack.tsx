import { stack } from "@/constants/data";
import { StackItem } from "./StackItem";
import { Fragment } from "react";
import { MotionBox } from "../MotionBox";

const Stack = () => {
  return (
    <section className="mb-36 md:mb-20">
      <div className="container">
        <div className="border-t-[6px] border-black pt-14 lg:pt-7">
          <MotionBox delay={0.1}>
            <h2 className="text-6xl font-medium mb-32 lg:mb-10 lg:text-4xl">My Instruments</h2>
          </MotionBox>
          <div className="grid grid-cols-4 gap-x-8 lg:grid-cols-2 lg:gap-x-4 sm:grid-cols-3">
            {
              stack.map((item, index) => (
                <Fragment key={index}>
                  <MotionBox delay={+`0.${index}`}>
                    <StackItem data={item} />
                  </MotionBox>
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stack };