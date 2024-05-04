import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import {useNavigate} from 'react-router-dom';
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const token = sessionStorage.getItem("token");
	const forward = useNavigate();

	useEffect(() => {
		if (!token || token == undefined) {
			forward("/")
		}
	});

	return (
		<div className="container text-center mt-5">
			{store.token && store.token != "" && store.token != undefined ?
				<h1 className="text-success">Welcome. This is an extremely private club. Good thing you are logged in.</h1>
			:
				null
			}
		</div>
	);
};
