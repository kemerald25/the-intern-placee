import { cn } from "../../lib/utils";

export const InlinePaddingContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <div className={cn("px-6", className)}>{children}</div>;
};
