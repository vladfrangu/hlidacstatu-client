import { ApiBase } from '../../Constants';

export const VersionedApiBase = `${ApiBase}/v2` as const;

export const Routes = {
	// ApiV2
	ping(text: string) {
		return `${VersionedApiBase}/ping/${text}` as const;
	},
	getmyip() {
		return `${VersionedApiBase}/getmyip` as const;
	},
	dumps() {
		return `${VersionedApiBase}/dumps` as const;
	},
	dump(dataType: string, date: string) {
		return `${VersionedApiBase}/dump/${dataType}/${date}` as const;
	},

	// ApiV2Datasety
	datasety(datasetId?: string) {
		if (datasetId) {
			return `${VersionedApiBase}/datasety/${datasetId}` as const;
		}

		return `${VersionedApiBase}/datasety` as const;
	},

	datasetyHledat(datasetId: string) {
		return `${VersionedApiBase}/datasety/${datasetId}/hledat` as const;
	},

	zaznamy(datasetId: string, itemId?: string) {
		if (itemId) {
			return `${VersionedApiBase}/datasety/${datasetId}/zaznamy/${itemId}` as const;
		}

		return `${VersionedApiBase}/datasety/${datasetId}/zaznamy` as const;
	},

	zaznamyExistuje(datasetId: string, itemId: string) {
		return `${VersionedApiBase}/datasety/${datasetId}/zaznamy/${itemId}/existuje` as const;
	},

	// ApiV2Dotace
	dotaceHledat() {
		return `${VersionedApiBase}/dotace/hledat` as const;
	},

	dotace(id: string) {
		return `${VersionedApiBase}/dotace/${id}` as const;
	},

	// ApiV2Firmy
	firmyIco(ico: string) {
		return `${VersionedApiBase}/firmy/ico/${ico}` as const;
	},

	firmy(jmenoFirmy: string) {
		return `${VersionedApiBase}/firmy/${jmenoFirmy}` as const;
	},

	firmySocial() {
		return `${VersionedApiBase}/firmy/social` as const;
	},
};
