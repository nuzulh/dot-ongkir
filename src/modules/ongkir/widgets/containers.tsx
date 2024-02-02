type ContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: ContainerProps) {
  return (
    <main className="ongkir-container" data-aos="fade-up">
      {children}
    </main>
  );
}
