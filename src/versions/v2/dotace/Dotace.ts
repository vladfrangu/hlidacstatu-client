import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { DotaceHledatRazeni } from '../../Constants';
import type { Client } from '../Client';
import type { DotaceSearchResultDTO, DotaceResult } from '../types/Dotace';
import { Routes } from '../types/Routes';

export class Dotace {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async hledat(options: DotaceHledatQuery = {}) {
		const url = new URL(Routes.dotaceHledat());

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const result = await fetch<DotaceSearchResultDTO>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async getOne(id: string) {
		const result = await fetch<DotaceResult>(Routes.dotace(id), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}
}

export interface DotaceHledatQuery {
	dotaz?: string;
	strana?: number;
	razeni?: DotaceHledatRazeni;
}
