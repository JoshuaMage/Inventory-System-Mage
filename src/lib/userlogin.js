

import { writable } from 'svelte/store';

export const LOGIN = writable([
	{
		title: 'Inventory System',
		description: 'Hardware Construction Company',
		company: 'Mage Inc',
		name: 'Employee Name',
		id: 'Employee Id',
		password: 'Password',
		login: 'Login',
		forgotpass: 'Forgot Password',
		createAcc: 'Create Account'
	}
]);

export const FORGOTPASSWORD = writable([
	{
		title: 'Inventory System',
		description: 'Forgot Password?',
		company: 'Mage Inc',
		name: 'Department',
		id: 'Employee Id',
		password: 'Password',
		confirmPassword: 'Confirm Password',
		login: 'Login',
		createAcc: 'Create Account'
	}
]);
