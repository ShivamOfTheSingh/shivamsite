import React from "react";
import './Contacts.css';

import { Flow, EmailPrompt, Profiles } from "."

const Contacts = (props) => {
	return (
		<div className="ContactsMain">
			<EmailPrompt />
			<Profiles />
			<Flow />
		</div>
	)
}

export default Contacts