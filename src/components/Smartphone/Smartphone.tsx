import React from "react";

interface SmartphoneProps {
  children: React.ReactNode;
}

const Smartphone: React.FC<SmartphoneProps> = ({ children }) => {
  return (
    <div className="smartphone">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Smartphone;
