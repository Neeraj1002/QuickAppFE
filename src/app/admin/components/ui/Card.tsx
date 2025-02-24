import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 border ${className || ""}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`pb-2 border-b ${className || ""}`}>{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return <h3 className={`text-lg font-semibold ${className || ""}`}>{children}</h3>;
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`pt-2 ${className || ""}`}>{children}</div>;
};
