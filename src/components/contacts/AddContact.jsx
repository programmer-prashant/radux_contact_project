import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const createContact = (e) => {
		e.preventDefault();
		const new_contact = {
			id: shortid.generate(),
			name,
			phone,
			email,
		};
		dispatch(addContact(new_contact));
		history.push('/');
	};
	return (
		<div className='card border=0 shadow'>
			<div className='card-header'>Add Contact</div>
			<div className='card-body'>
				<form action='' onSubmit={createContact}>
					<div className='form-group'>
						<input
							type='text'
							name='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='form-control'
							placeholder='Enter name here'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							name='phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className='form-control'
							placeholder='Enter phone number here'
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='form-control'
							placeholder='Enter email address here'
						/>
					</div>
					<button className='btn btn-primary'>Add Contact</button>
				</form>
			</div>
		</div>
	);
};

export default AddContact;
