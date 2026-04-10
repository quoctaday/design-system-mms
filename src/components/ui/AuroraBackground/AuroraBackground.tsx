import React, { type ReactNode } from "react";
import { cn } from "../../../lib/utils";
import "./AuroraBackground.css";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn("aurora-container", className)}
      {...props}
    >
      <div className="aurora-wrapper">
        <div
          className={cn(
            "aurora-effect",
            showRadialGradient && "radial-mask"
          )}
        ></div>
      </div>
      <div className="aurora-content" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
