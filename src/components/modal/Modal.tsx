import React, { ReactElement } from 'react';
import IModalProps from '../../models/modal/IModalProps';

import './Modal.scss';

const Modal = ({ active, setActive }: IModalProps): ReactElement => {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}
			>
				<p>All data succesfully send!</p>
				<p>To close, please click outside the modal window...</p>
			</div>
		</div>
	);
};

export default Modal;
