import { Loader2 } from "lucide-react";
import clsx from "clsx";

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => (
  <div className={clsx("flex items-center justify-center py-20", className)}>
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

export default LoadingSpinner;
