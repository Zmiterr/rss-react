interface ICardProps {
	formItem: ICardPropsModel;
	key?: number;
}

interface ICardPropsModel {
	[key: string]: string;
}

export default ICardProps;
