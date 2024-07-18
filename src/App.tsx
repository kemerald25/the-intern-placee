import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<Signin />} />
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
