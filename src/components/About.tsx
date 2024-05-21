type Props = {
  children: React.ReactNode;
}

const About = ({ children }: Props) => {
  return (
    <section className="mb-36 md:mb-20 lg:bg-black">
      <div className="container-big">
        <div className="bg-black rounded-[3rem] text-white p-24 flex items-center justify-between gap-5 lg:bg-transparent lg:flex-col-reverse lg:px-0 lg:py-10 lg:rounded-[1.5rem]">
          {children}
        </div>
      </div>
    </section>
  );
};

export { About };