import { useRef } from 'react'
import axios from 'axios';
import Input from '../components/Input'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Signin() {
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

	async function signin() {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;
		const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/v1/signin", {
			username,
			password
		});
		alert("You have signin check your token in playload")
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard") //redirected user to the dashboard
	}

	return (
		<div className="signup-page">
			<div className="signup-card">
				<h2>Login to your account</h2>
				<p className="muted">Login to access your second brain.</p>

				<div className="form">
					<label>username</label>
					<Input ref={usernameRef} placeholder="Enter your username" />

					<label>Password</label>
					<Input ref={passwordRef} placeholder="Enter Password" />

					<button className="btn btn-primary" onClick={signin}>Sign in</button>
				</div>
			</div>
		</div>
	)
}

export default Signin;