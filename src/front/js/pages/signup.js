import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClickSubmit = (event) => {
		event.preventDefault()
		actions.handleRegister(email, password);
	};

	return (
		<div className="d-flex align-items-center flex-column">
			<h1>Signup</h1>
			<form className="col-6" onSubmit={handleClickSubmit}>
				<div className="form-group mb-3">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group mb-3">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<div className="d-flex align-items-end flex-column">
					<button type="submit" className="btn btn-primary">Signup</button>
				</div>
			</form>
		</div>
	);
};
