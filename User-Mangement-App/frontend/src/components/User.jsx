import { useLocation } from "react-router";

function User() {
  const { state } = useLocation();

  if (!state || !state.user) {
    return <p>No user data available</p>;
  }

  const { name, email, dateOfBirth, mobileNumber } = state.user;

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{dateOfBirth}</p>
      <p>{mobileNumber}</p>
    </div>
  );
}

export default User;