export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
	try {
		// login user
		const { data } = await api.signInGoogle(accessToken);
		localStorage.setItem('user_info', JSON.stringify({ ...action?.data }));
		console.log(action.data);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
	try {
		// signup user
		const { data } = await api.signUpGoogle(accessToken);
		localStorage.setItem('user_info', JSON.stringify({ ...action?.data }));
		console.log(action.data);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};
