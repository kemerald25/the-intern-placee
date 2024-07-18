import { Link } from "react-router-dom";

export function Logo() {
	return (
		<Link to="/">
			<img src="/svgs/logo.svg" alt="The Intern Place" width={39} height={36} />
		</Link>
	);
}
