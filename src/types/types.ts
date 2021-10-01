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

// export interface ICardListProps {
// 	articles: ICardItem[];
// }

export interface IFormProps {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

}

export interface ISearchPanelProps {
	isLoading: boolean;
	searchValue: string;
	// setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDropDownProps {
	sortBy: string;
	// setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPageNumberProps {
	page: number;
	// setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPageSizeProps {
	pageSize: number;
	// setPageSize: React.Dispatch<React.SetStateAction<number>>;
}

export interface IDetailsParams {
	id: string;
}
