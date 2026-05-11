import { useRef } from 'react'
import axios from 'axios';
import Input from '../components/Input'
import './Signup.css'


function Signup() {
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	async function signup() {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;
		await axios.post(import.meta.env.VITE_BACKEND_URL + "api/v1/signup", {
			username,
			password
		});
		alert("You have signup")
	}

	return (
		<div className="signup-page">
			<div className="signup-card">
				<h2>Create your account</h2>
				<p className="muted">Sign up to access your second brain.</p>

				<div className="form">
					<label>username</label>
					<Input ref={usernameRef} placeholder="Enter your username" />

					<label>OTP</label>
					<div className="otp-row">
						<Input ref={passwordRef} placeholder="Enter Password" />
						<button className="btn btn-primary" onClick={signup}>Sign up</button>
					</div>
				</div>
			</div>
		</ div>
	);
}

export default Signup;