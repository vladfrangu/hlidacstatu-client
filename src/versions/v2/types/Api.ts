import type { HTTPStatusCodes, HTTPVersionPolicy } from '../../Constants';

export interface DumpInfoModel {
	url: string | null;
	date: string | null;
	size: number;
	fulldump: boolean;
	created: string;
	dataType: string | null;
}

export interface HTTPResponseMessage {
	version: Version;
	content: HTTPContent;
	statusCode: HTTPStatusCodes;
	reasonPhrase: string | null;
	headers: Headers[] | null;
	trailingHeaders: Headers[] | null;
	requestMessage: HTTPRequestMessage;
	isSuccessStatusCode: boolean;
}

export interface Version {
	major: number;
	minor: number;
	build: number;
	revision: number;
	majorRevision: number;
	minorRevision: number;
}

export interface HTTPContent {
	headers: Headers[] | null;
}

export interface Headers {
	key: string;
	value: string[];
}

export interface HTTPRequestMessage {
	version: Version;
	versionPolicy: HTTPVersionPolicy;
	content: HTTPContent;
	method: HTTPMethod;
	requestUri: string | null;
	headers: Headers[] | null;
	/** @deprecated */
	properties: Record<string, unknown> | null;
	options: Record<string, unknown> | null;
}

export interface HTTPMethod {
	method: string | null;
}
