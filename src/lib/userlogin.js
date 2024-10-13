import { writable } from 'svelte/store';

export const LOGIN = writable([
	{
		title: 'Inventory System',
		description: 'Mage Hardware Inc.',
		company: 'Mage Inc',
		name: 'Employee-Name',
		id: 'Employee-Id',
		password: 'Password',
		login: 'Login',
		forgotPassword: 'Forgot Password',
		createAccount: 'Create Account'
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
		createAccount: 'Confirm New-password'
	}
]);

export const CREATEACCOUNT = writable([
	{
		title: 'Inventory System',
		description: 'Create Employee',
		company: 'Mage Inc',
		name: 'Employee Name',
		id: 'Employee Id',
		password: 'Password',
		createAcc: 'Create Account'
	}
]);


