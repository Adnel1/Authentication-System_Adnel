import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex align-items-center flex-column">
			<h1>Login</h1>
			<form className="col-6">
				<div className="form-group mb-3">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group mb-3">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
				</div>
				<div className="d-flex align-items-end flex-column">
					<button type="submit" className="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	);
};
