type ContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: ContainerProps) {
  return (
    <main className="main-container" data-aos="fade-up">
      {children}
    </main>
  );
}

export function SectionContainer({ children }: ContainerProps) {
  return (
    <section className="section-container">
      {children}
    </section>
  );
}
