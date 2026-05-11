import Input from '../components/Input'
import './Signup.css'

function Signin() {

	return (
		<div className="signup-page">
			<div className="signup-card">
				<h2>Login to your account</h2>
				<p className="muted">Login to access your second brain.</p>

				<div className="form">
					<label>username</label>
					<Input placeholder="Enter your username" />

					<label>OTP</label>
					<div className="otp-row">
						<Input placeholder="Enter Password" />
					</div>
					<button className="btn btn-primary">Sign in</button>
				</div>
			</div>
		</div>
	)
}

export default Signin;