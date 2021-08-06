import { fetch } from '../../../fetchUtil/fetch';
import { FetchMethods, FetchResultTypes } from '../../../fetchUtil/types';
import type { Client } from '../Client';
import type { DSCreatedDTO, Registration, RegistrationSearchResultDTO } from '../types/Datasety';
import { Routes } from '../types/Routes';

export class Datasety {
	private readonly client: Client;

	public constructor(client: Client) {
		this.client = client;
	}

	public async getAll() {
		const results = await fetch<RegistrationSearchResultDTO>(
			Routes.datasety(),
			this.client['apiToken'],
			FetchResultTypes.JSON,
		);

		return results;
	}

	public async createDataset(data: Registration) {
		const result = await fetch<DSCreatedDTO>(
			Routes.datasety(),
			this.client['apiToken'],
			{
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
				method: FetchMethods.Post,
			},
			FetchResultTypes.JSON,
		);

		return result;
	}

	public async updateDataset(data: Registration) {
		const result = await fetch<Registration>(
			Routes.datasety(),
			this.client['apiToken'],
			{
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
				method: FetchMethods.Put,
			},
			FetchResultTypes.JSON,
		);

		return result;
	}
}
