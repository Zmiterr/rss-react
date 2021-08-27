import React, { ReactElement, useEffect, useState } from 'react';
import IFormErrors from '../../models/form/IFormErrors';
import IFormProps from '../../models/form/IFormProps';

import './Form.scss';

const Form = ({ setFormValues }: IFormProps): ReactElement => {
	const [firstName, setFirstName] = useState('');

	const [birthDate, setBirthDate] = useState('');
	const [race, setRace] = useState('Human');
	const [gender, setGender] = useState('Male');
	const [agree, setAgree] = useState(false);
	const [errors, setErrors] = useState<IFormErrors>({});

	const validate = () => {
		setErrors({});
		if (firstName === '') {
			setErrors((state) => ({ ...state, firstName }));
		}
		if (birthDate === '') {
			setErrors((state) => ({ ...state, birthDate }));
		}
		if (!agree) {
			setErrors((state) => ({ ...state, agree }));
		}
	};

	useEffect(() => {
		validate();
	}, [firstName, birthDate, agree]);

	const reset = () => {
		setFirstName('');
		setBirthDate('');
		setRace('Human');
		setGender('Male');
		setAgree(false);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (Object.keys(errors).length === 0) {
			setFormValues((state: string) => [
				...state,
				{ firstName, birthDate, race, gender, agree },
			]);

			reset();
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="firstName">
				<p>
					Character Name:
					{errors?.firstName === '' && (
						<p className="form__check"> * Character Name should be fill</p>
					)}
				</p>
				<input
					type="text"
					name="firstName"
					value={firstName}
					onChange={(event) => setFirstName(event.target.value)}
				/>
			</label>

			<label htmlFor="birthDate">
				<p>
					Birth Date:
					{errors?.birthDate === '' && (
						<p className="form__check"> * birth date should be fill</p>
					)}
				</p>
				<input
					type="date"
					name="birthDate"
					value={birthDate}
					onChange={(event) => setBirthDate(event.target.value)}
				/>
			</label>

			<label htmlFor="race">
				Race:
				<select
					className=""
					name="race"
					value={race}
					onChange={(event) => setRace(event.target.value)}
				>
					<option>Human</option>
					<option>Elf</option>
					<option>Ork</option>
				</select>
			</label>

			<label htmlFor="gender" className="label__radio">
				<p>Whats your gender?</p>
				<div>
					<input
						type="radio"
						name="gender"
						checked={gender === 'Male'}
						value="Male"
						onChange={(event) => setGender(event.target.value)}
					/>
					<span>Male</span>
				</div>
				<div>
					<input
						type="radio"
						name="gender"
						value="Female"
						checked={gender === 'Female'}
						onChange={(event) => setGender(event.target.value)}
					/>
					<span>Female</span>
				</div>
			</label>

			<label htmlFor="agree">
				<p>
					I agree to start the game
					{errors?.agree !== undefined && (
						<p className="form__check"> * agree should be check</p>
					)}
				</p>
				<input
					type="checkbox"
					name="agree"
					checked={agree}
					onChange={() => setAgree((prev) => !prev)}
				/>
			</label>

			<div className="form__submit">
				<input type="submit" value="Send" />
			</div>
		</form>
	);
};

export default Form;
