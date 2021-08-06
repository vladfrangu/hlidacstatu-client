export interface RegistrationSearchResultDTO {
	total: number;
	page: number;
	results: Registration[] | null;
}

export interface Registration {
	id: string | null;
	name: string | null;
	datasetId: string | null;
	origUrl: string | null;
	sourcecodeUrl: string | null;
	description: string | null;
	jsonSchema: string | null;
	createdBy: string | null;
	created: string;
	betaversion: boolean;
	allowWriteAccess: boolean;
	hidden: boolean;
	searchResultTemplate: Template;
	detailTemplate: Template;
	defaultOrderBy: string | null;
	orderList: unknown[] | null;
}

export interface Template {
	header: string | null;
	body: string | null;
	footer: string | null;
	title: string | null;
	properties: string[] | null;
}

export interface DSCreatedDTO {
	datasetId: string | null;
}

export interface ObjectSearchResultDTO {
	total: number;
	page: number;
	results: ZaznamyData[] | null;
}

export type ZaznamyData = Record<string, unknown>;

export interface DSItemResponseDTO {
	id: string;
}
