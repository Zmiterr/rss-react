export enum StatusCode {
	ClientErrorBadRequest = 400,
	ClientErrorTooManyRequests = 429,
	ClientErrorUpgradeRequired = 426,
	ServerErrorInternal = 500,
}

export interface ICardItem {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	source: { id: string; name: string };
	title: string;
	urlToImage: string;
	url: string;
}

export interface ICardItemProps {
	article: ICardItem;
	index: number;
}

export interface ISearchPanelProps {
	searchValue: string;
}

export interface IDropDownProps {
	sortBy: string;
}

export interface IPageNumberProps {
	page: number;
}

export interface IPageSizeProps {
	pageSize: number;
}

export interface IDetailsParams {
	id: string;
}

export interface IApiError {
	status: string;
	code: string;
	message: string;
}
