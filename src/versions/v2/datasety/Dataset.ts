import { fetch } from '../../../fetchUtil/fetch';
import { FetchMethods, FetchResultTypes } from '../../../fetchUtil/types';
import type { SortingOrder } from '../../Constants';
import type { Client } from '../Client';
import type { DSItemResponseDTO, ObjectSearchResultDTO, Registration, ZaznamyData } from '../types/Datasety';
import { Routes } from '../types/Routes';
import { Zaznamy } from './Zaznamy';

export class Dataset {
	public readonly datasetId: string;

	private readonly client: Client;

	public constructor(client: Client, datasetId: string) {
		this.client = client;
		this.datasetId = datasetId;
	}

	public async get() {
		const results = await fetch<Registration>(
			Routes.datasety(this.datasetId),
			this.client['apiToken'],
			FetchResultTypes.JSON,
		);

		return results;
	}

	public async delete() {
		const result = await fetch<boolean>(
			Routes.datasety(this.datasetId),
			this.client['apiToken'],
			{
				headers: {
					'Content-Type': 'application/json',
				},
				method: FetchMethods.Delete,
			},
			FetchResultTypes.JSON,
		);

		return result;
	}

	public async hledat(options: HledatOptions = {}) {
		const url = new URL(Routes.datasety(this.datasetId));

		for (const [key, value] of Object.entries(options)) {
			url.searchParams.set(key, value);
		}

		const results = await fetch<ObjectSearchResultDTO>(url, this.client['apiToken'], FetchResultTypes.JSON);

		return results;
	}

	public async createZaznamy(data: ZaznamyData[]) {
		const results = await fetch<DSItemResponseDTO[]>(
			Routes.zaznamy(this.datasetId),
			this.client['apiToken'],
			{
				headers: { 'Content-Type': 'application/json' },
				method: FetchMethods.Post,
				body: JSON.stringify(data),
			},
			FetchResultTypes.JSON,
		);

		return results;
	}

	public zaznamy(itemId: string) {
		return new Zaznamy(this, itemId);
	}
}

export interface HledatOptions {
	dotaz?: string;
	strana?: number;
	sort?: string;
	desc?: SortingOrder;
}
