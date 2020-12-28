import React, { useState } from "react";
import fakeUser from "../../FakeUser/FakeUser";
import User from "../User/User";

const AllUsers = () => {
	const [users, setUsers] = useState(fakeUser);

	return (
		<div className="container  p-3">
			<div className="table-responsive">
				<table className="table table-hover text-center">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col"> Name</th>
							<th scope="col">Email</th>
							<th scope="col">Phone</th>
							<th scope="col">Job</th>
							<th scope="col">Country</th>
							<th scope="col">More</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<User user={user} index={index + 1}></User>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllUsers;
