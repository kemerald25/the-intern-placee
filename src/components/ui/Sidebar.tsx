import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="bg-raisin-black flex flex-col justify-between pt-[1.5rem] px-[0.5625rem] w-full max-w-[3.5625rem] h-dvh">
			<Link to="/">
				<img
					src="/svgs/logo.svg"
					alt="The Intern Place"
					width={39}
					height={36}
				/>
			</Link>
		</aside>
	);
};

export default Sidebar;
