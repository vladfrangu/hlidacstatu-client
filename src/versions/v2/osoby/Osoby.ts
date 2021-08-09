import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { SocialNetwork } from '../../Constants';
import type { Client } from '../Client';
import type { OsobaDetailDTO, OsobaDTO, OsobaSocialDTO } from '../types/Osoby';
import { Routes } from '../types/Routes';

export class Osoby {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async getOne(id: string) {
		const result = await fetch<OsobaDetailDTO>(Routes.osoby(id), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async hledatFtx(options: OsobyHledatFtxOptions = {}) {
		const url = new URL(Routes.osobyHledatFtx());

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const results = await fetch<OsobaDTO[]>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return results;
	}

	public async hledat(options: OsobyHledatQuery = {}) {
		const url = new URL(Routes.osobyHledat());

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const results = await fetch<OsobaDTO[]>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return results;
	}

	public async social(typ?: SocialNetwork | SocialNetwork[]) {
		const url = new URL(Routes.osobySocial());

		if (typeof typ === 'number' || Array.isArray(typ)) {
			url.searchParams.set('typ', String(typ));
		}

		const results = await fetch<OsobaSocialDTO[]>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return results;
	}
}

export interface OsobyHledatQuery {
	jmeno?: string;
	prijmeni?: string;
	datumNarozeni?: string;
	ignoreDiakritiku?: boolean;
}

export interface OsobyHledatFtxOptions {
	ftxDotaz?: string;
	strana?: number;
}
