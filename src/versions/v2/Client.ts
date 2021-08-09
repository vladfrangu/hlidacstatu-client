import { fetch } from '../../fetchUtil/fetch';
import { FetchResultTypes } from '../../fetchUtil/types';
import { Dataset } from './datasety/Dataset';
import { Datasety } from './datasety/Datasety';
import { Dotace } from './dotace/Dotace';
import { Firmy } from './firmy/Firmy';
import { Insolvence } from './insolvence/Insolvence';
import { Osoby } from './osoby/Osoby';
import { Smlouvy } from './smlouvy/Smlouvy';
import type { DumpInfoModel, HTTPResponseMessage } from './types/Api';
import { Routes, VersionedApiBase } from './types/Routes';
import { Verejnezakazky } from './vz/Verejnezakazky';
import { Weby } from './weby/Weby';

export class Client {
	public static readonly VersionedApiBase = VersionedApiBase;
	public static readonly Routes = Routes;

	private readonly apiToken: string;

	public readonly datasety = new Datasety(this);

	public readonly dotace = new Dotace(this);

	public readonly firmy = new Firmy(this);

	public readonly insolvence = new Insolvence(this);

	public readonly osoby = new Osoby(this);

	public readonly smlouvy = new Smlouvy(this);

	public readonly verejnezakazky = new Verejnezakazky(this);

	public readonly weby = new Weby(this);

	public constructor(apiToken: string) {
		this.apiToken = apiToken;
	}

	public async ping(text: string) {
		const result = await fetch(Routes.ping(text), this.apiToken, FetchResultTypes.Text);

		return result;
	}

	public async getMyIp() {
		const result = await fetch(Routes.getmyip(), this.apiToken, FetchResultTypes.Text);

		return result;
	}

	public async dumps() {
		const result = await fetch<DumpInfoModel[]>(Routes.dumps(), this.apiToken, FetchResultTypes.JSON);

		return result;
	}

	public async dump(dataType: string, date: string) {
		const result = await fetch<HTTPResponseMessage>(Routes.dump(dataType, date), this.apiToken, FetchResultTypes.JSON);

		return result;
	}

	public dataset(datasetId: string) {
		return new Dataset(this, datasetId);
	}
}
