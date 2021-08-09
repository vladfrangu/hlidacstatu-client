import { fetch } from '../../../fetchUtil/fetch';
import { FetchResultTypes } from '../../../fetchUtil/types';
import type { Client } from '../Client';
import type { WebStatusExport, ZabHost } from '../types/Weby';
import { Routes } from '../types/Routes';

export class Weby {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async getOne(id: string) {
		const result = await fetch<WebStatusExport>(Routes.weby(id), this.client['apiToken'], FetchResultTypes.JSON);

		return result;
	}

	public async getAll() {
		const results = await fetch<ZabHost[]>(Routes.weby(), this.client['apiToken'], FetchResultTypes.JSON);

		return results;
	}
}
