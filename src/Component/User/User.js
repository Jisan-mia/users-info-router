import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
	// console.log(props);
	const {
		id,
		first_name,
		last_name,
		email,
		username,
		job,
		country,
	} = props.user;

	return (
		<>
			<tr>
				<th scope="row">{props.index}</th>
				<td>{`${first_name} ${last_name}`}</td>
				<td>{username}</td>
				<td>{email}</td>

				<td>{job}</td>
				<td>{country} </td>
				<td>
					<Link to={`/user/${id}`} className="btn btn-outline-primary">
						More
					</Link>
				</td>
			</tr>
		</>
	);
};

export default User;
