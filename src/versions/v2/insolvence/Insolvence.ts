import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { InsolvenceHledatRazeni } from '../../Constants';
import type { Client } from '../Client';
import type { Rizeni, RizeniSearchResultDTO } from '../types/Insolvence';
import { Routes } from '../types/Routes';

export class Insolvence {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async hledat(options: InsolvenceHledatQuery) {
		const url = new URL(Routes.insolvenceHledat());

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const result = await fetch<RizeniSearchResultDTO>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async getOne(id: string) {
		const result = await fetch<Rizeni>(Routes.insolvence(id), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}
}

export interface InsolvenceHledatQuery {
	dotaz?: string;
	strana?: number;
	razeni?: InsolvenceHledatRazeni;
}
