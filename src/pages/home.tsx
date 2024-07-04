import { Bookmark, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { InlinePaddingContainer } from "../components/ui/Container";
import RootLayout from "./layout";

export default function Home() {
	const [isHeaderOpen, setIsHeaderOpen] = useState(true);

	return (
		<RootLayout>
			{isHeaderOpen && (
				<header className="min-h-[17.875rem] pb-6 text-white flex justify-end flex-col w-full relative isolate">
					{/* Dave me without conscience */}
					<img
						src="/images/23a5bbb18f810f4e62ba759d4fceaf79.png"
						alt="banner"
						className="absolute top-0 left-0 object-cover object-left w-full h-full -z-10"
					/>
					<InlinePaddingContainer>
						<div>
							{/* mykola is the users' name */}
							<h1 className="text-2xl mb-[1.125rem]">
								Mykola we’re here to <br /> help you land your next job!
							</h1>
							<div className="flex items-center space-x-[0.75rem]">
								<Button variant={"secondary"}>
									Learn about personal domains
								</Button>
								<Button variant={"secondary"}>Learn more</Button>
							</div>
						</div>
						<Button
							onClick={() => setIsHeaderOpen(false)}
							className="absolute right-5 top-5 px-2"
							size={"sm"}
							variant={"secondary"}>
							<X />
						</Button>
					</InlinePaddingContainer>
				</header>
			)}
			<InlinePaddingContainer>
				<section className="py-6 space-y-4">
					<div className="flex items-center justify-between w-full">
						<h2 className="font-semibold text-xl">Recommended for you</h2>
						<div className="flex items-center space-x-2">
							<Button variant={"secondary"}>See all</Button>
							<Button variant={"secondary"}>Post a job</Button>
						</div>
					</div>
					<div className="flex gap-x-4">
						<JobDetailsBriefCard />
						<JobDetailsBriefCard />
						<JobDetailsBriefCard />
						<JobDetailsBriefCard />
						<JobDetailsBriefCard />
					</div>
				</section>
			</InlinePaddingContainer>
		</RootLayout>
	);
}

// TODO: move to its own file
const JobDetailsBriefCard = () => {
	return (
		<Card className="grow border-none">
			<CardHeader className="flex-row items-center gap-x-3">
				<div className="aspect-square w-12 rounded-lg overflow-hidden">
					<img
						className="w-full h-full object-cover"
						src="/svgs/demo-logo.svg"
						alt="demo logo"
						width={150}
						height={150}
					/>
				</div>
				<div>
					<CardTitle className="text-placeholder text-base">WorkOS</CardTitle>
					<CardDescription className="text-base text-white">
						Product Designer
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				We're looking for experienced product designers who have experience
				designing complex...
			</CardContent>
			<CardFooter className="flex justify-between gap-x-1.5">
				<Button variant="outline" className="bg-transparent grow">
					View
				</Button>
				<Button variant={"outline"} className="bg-transparent">
					<Bookmark className="stroke-[#AAA]" />
				</Button>
			</CardFooter>
		</Card>
	);
};
