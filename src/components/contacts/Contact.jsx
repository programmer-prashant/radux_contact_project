import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux';

const Contact = ({ contact, selectAll }) => {
	const dispatch = useDispatch();
	return (
		<tr>
			<td>
				<div className='custom-control custom-checkbox'>
					<input
						checked={selectAll}
						type='checkbox'
						className='custom-control-input'
					/>
					<label htmlFor='' className='custom-control-label'></label>
				</div>
			</td>
			<td>
				<Avatar className='mr-2' name={contact.name} size='45' round={true} />
				{contact.name}
			</td>
			<td>{contact.phone}</td>
			<td>{contact.email}</td>
			<td className='actions'>
				<Link to={`/contacts/edit/${contact.id}`}>
					<span className='material-icons mr-2'>edit</span>
				</Link>

				<Link>
					<span
						className='material-icons text-danger'
						onClick={() => dispatch(deleteContact(contact.id))}
					>
						remove_circle
					</span>
				</Link>
			</td>
		</tr>
	);
};

export default Contact;
