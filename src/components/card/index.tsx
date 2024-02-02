import "./card.scss";

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

Card.Title = function ({ children }: CardProps) {
  return (
    <div className="card-title">
      {children}
    </div>
  );
};

Card.Subtitle = function ({ children }: CardProps) {
  return (
    <div className="card-subtitle">
      {children}
    </div>
  );
};

Card.Content = function ({ children }: CardProps) {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};

Card.Footer = function ({ children }: CardProps) {
  return (
    <div className="card-footer">
      {children}
    </div>
  );
};
