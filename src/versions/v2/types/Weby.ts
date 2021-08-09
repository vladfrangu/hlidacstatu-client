export interface ZabHost {
	hostid: string | null;
	host: string | null;
	url: string | null;
	opendataUrl: string | null;
	pageUrl: string | null;
	customUrl: string | null;
	urad: string | null;
	publicname: string | null;
	popis: string | null;
	itemIdResponseTime: string | null;
	itemIdSsl: string | null;
	groups: string[] | null;
	hash: string | null;
}

export interface WebStatusExport {
	availability: ZabHostAvailability;
	ssl: SslData;
	detailUrl: string | null;
}

export interface ZabHostAvailability {
	host: ZabHost;
	data: ZabAvailability[] | null;
}

export interface SslData {
	grade: string | null;
	latestCheck: string | null;
	copyright: string | null;
	fullReport: string | null;
}

export interface ZabAvailability {
	time: string;
	response: number | null;
	httpStatusCode: number | null;
	downloadSpeed: number | null;
}
