import { fetch } from '../../../fetchUtil/fetch';
import { FetchMethods, FetchResultTypes } from '../../../fetchUtil/types';
import type { ZaznamyMode } from '../../Constants';
import type { DSItemResponseDTO, ZaznamyData } from '../types/Datasety';
import { Routes } from '../types/Routes';
import type { Dataset } from './Dataset';

export class Zaznamy {
	public readonly itemId: string;

	private readonly dataset: Dataset;

	public constructor(dataset: Dataset, itemId: string) {
		this.dataset = dataset;
		this.itemId = itemId;
	}

	public async get() {
		const result = await fetch<ZaznamyData>(
			Routes.zaznamy(this.dataset.datasetId, this.itemId),
			this.dataset['client']['apiToken'],
			FetchResultTypes.JSON,
		);

		return result;
	}

	public async insertOrUpdate(data: ZaznamyData, mode?: ZaznamyMode) {
		const url = new URL(Routes.zaznamy(this.dataset.datasetId, this.itemId));

		if (typeof mode === 'string') {
			url.searchParams.set('mode', mode);
		}

		const result = await fetch<DSItemResponseDTO>(
			url,
			this.dataset['client']['apiToken'],
			{
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
				method: FetchMethods.Post,
			},
			FetchResultTypes.JSON,
		);

		return result;
	}

	public async exists() {
		const result = await fetch<boolean>(
			Routes.zaznamyExistuje(this.dataset.datasetId, this.itemId),
			this.dataset['client']['apiToken'],
			FetchResultTypes.JSON,
		);

		return result;
	}
}
