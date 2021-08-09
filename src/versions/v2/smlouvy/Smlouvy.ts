import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { SmlouvyHledatRazeni } from '../../Constants';
import type { Client } from '../Client';
import type { SmlouvaSearchResultDTO, Smlouva } from '../types/Smlouvy';
import { Routes } from '../types/Routes';

export class Smlouvy {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async hledat(options: SmlouvyHledatQuery) {
		const url = new URL(Routes.smlouvyHledat());

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const result = await fetch<SmlouvaSearchResultDTO>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async getOne(id: string) {
		const result = await fetch<Smlouva>(Routes.smlouvy(id), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async vsechnaID() {
		const result = await fetch<string[]>(Routes.smlouvyVsechnaID(), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async text(id: string) {
		const result = await fetch<string[]>(Routes.smlouvyText(id), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}
}

export interface SmlouvyHledatQuery {
	dotaz: string;
	strana?: number;
	razeni?: SmlouvyHledatRazeni;
}
