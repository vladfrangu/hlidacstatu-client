import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { SocialNetwork } from '../../Constants';
import type { Client } from '../Client';
import type { FirmaDTO, FirmaSocialDTO } from '../types/Firmy';
import { Routes } from '../types/Routes';

export class Firmy {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async ico(ico: string) {
		const result = await fetch<FirmaDTO>(Routes.firmyIco(ico), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async getOne(jmenoFirmy: string) {
		const result = await fetch<FirmaDTO>(Routes.firmy(jmenoFirmy), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async social(typ?: SocialNetwork | SocialNetwork[]) {
		const url = new URL(Routes.firmySocial());

		if (typeof typ === 'number' || Array.isArray(typ)) {
			url.searchParams.set('typ', String(typ));
		}

		const result = await fetch<FirmaSocialDTO[]>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}
}
