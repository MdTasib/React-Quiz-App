import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Signup from "../pages/Signup";
import "../styles/app.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/quiz'
						element={
							<PrivateRoute>
								<Quiz />
							</PrivateRoute>
						}
					/>
					<Route
						path='/result'
						element={
							<PrivateRoute>
								<Result />
							</PrivateRoute>
						}
					/>
				</Routes>
			</Layout>
		</AuthProvider>
	);
}
export default App;
