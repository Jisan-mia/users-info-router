import React from "react";
import { Link, useParams } from "react-router-dom";
import fakeUser from "../../FakeUser/FakeUser";
import "./UserDetal.css";
const UserDetail = () => {
	const { userId } = useParams();

	const currentUster = fakeUser.find((user) => user.id === Number(userId));
	const {
		id,
		first_name,
		last_name,
		phone,
		email,
		username,
		job,
		country,
		password,
		university,
		salary,
		marital_status,
		favourite_color,
		favourite_movie,
		postal_code,
		birthday,
	} = currentUster;
	console.log(currentUster);
	return (
		<div className="container">
			<div className="w-100 w-md-75   mx-auto shadow p-md-5 p-3">
				<div className="d-flex justify-content-between align-items-center ">
					<h3 className="display-4">UserId: {userId}</h3>
					<Link to="/users" className="btn btn-secondary ">
						Back
					</Link>
				</div>
				<div className="row ">
					<div className="border p-3  col-md-6">
						Name: {`${first_name} ${last_name}`}
					</div>
					<div className="border p-3  col-md-6">Username: {username}</div>
					<div className="border p-3 col-md-6">Email: {email}</div>
					<div className="border p-3 col-md-6">Password: {password}</div>
					<div className="border p-3 col-md-6">Phone: {phone}</div>
					<div className="border p-3 col-md-6">University: {university}</div>
					<div className="border p-3 col-md-6">Job: {job}</div>
					<div className="border p-3 col-md-6">Salary: {salary}/y </div>
					<div className="border p-3 col-md-6">
						Marital Status: {marital_status ? "Married" : "Unmarried"}
					</div>
					<div className="border p-3 col-md-6">Country: {country}</div>
					<div className="border p-3 col-md-6">Postal Code: {postal_code}</div>
					<div className="border p-3 col-md-6">Birthday: {birthday}</div>
					<div className="border p-3 col-md-6">
						Favourite Color: {favourite_color}
					</div>
					<div className="border p-3 col-md-6">
						Favourite Movie: {favourite_movie}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetail;
