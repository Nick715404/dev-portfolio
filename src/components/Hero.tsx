type Props = {
  children: React.ReactNode;
}

const Hero = ({ children }: Props) => {
  return (
    <section className="h-dvh mb-5 lg:h-auto lg:mb-8">
      <div className="container flex flex-col items-start justify-center h-full">
        {children}
      </div>
    </section>
  );
};

export { Hero };