import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { VerejnezakazkyHledatRazeni } from '../../Constants';
import type { Client } from '../Client';
import type { VerejnaZakazka, VerejnaZakazkaSearchResultDTO } from '../types/Vz';
import { Routes } from '../types/Routes';

export class Verejnezakazky {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async getOne(id: string) {
		const result = await fetch<VerejnaZakazka>(
			Routes.verejnezakazky(id),
			this.client['apiToken'],
			FetchResultTypes.JSON,
		);

		return result;
	}

	public async hledat(options: VerejnaZakazkaHledatQuery) {
		const url = new URL(Routes.verejnezakazkyHledat());

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const result = await fetch<VerejnaZakazkaSearchResultDTO>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}
}

export interface VerejnaZakazkaHledatQuery {
	dotaz: string;
	strana?: number;
	razeni?: VerejnezakazkyHledatRazeni;
}
