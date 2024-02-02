type ContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({
  children,
}: ContainerProps) {
  return (
    <main data-aos="fade-up" className="about-container">
      {children}
    </main>
  );
}
