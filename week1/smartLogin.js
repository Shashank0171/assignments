let isLoggedIn = false;
let isProfileComplete = false;

let message;

if (isLoggedIn && !isProfileComplete) {
	message = "User profile is incomplete";
} else if (isLoggedIn && isProfileComplete) {
	message = "Welcome back";
} else {
	message = "User is not logged in";
}
console.log(message);