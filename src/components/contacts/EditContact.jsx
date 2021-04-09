import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditContact = () => {
	let { id } = useParams();
	let history = useHistory();
	const dispatch = useDispatch();
	const contact = useSelector((state) => state.contact.contact);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	useEffect(() => {
		if (contact != null) {
			setName(contact.name);
			setPhone(contact.phone);
			setEmail(contact.email);
		}
		dispatch(getContact(id));
	}, [contact]);

	const onUpdateContact = (e) => {
		e.preventDefault();
		const update_contact = Object.assign(contact, {
			name,
			phone,
			email,
		});
		dispatch(updateContact(update_contact));
		history.push('/');
	};
	return (
		<div className='card border=0 shadow'>
			<div className='card-header'>Edit Contact</div>
			<div className='card-body'>
				<form action='' onSubmit={onUpdateContact}>
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
					<button className='btn btn-warning'>Update Contact</button>
				</form>
			</div>
		</div>
	);
};

export default EditContact;
