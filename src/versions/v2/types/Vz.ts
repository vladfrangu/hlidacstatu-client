import type { DataQualityEnum, StavyZakazky } from '../../Constants';

export interface VerejnaZakazka {
	onlyOnProfile: boolean;
	id: string | null;
	evidencniCisloZakazky: string | null;
	zakazkaNaProfiluId: string | null;
	formulare: Formular[] | null;
	kriteria: HodnoticiKriteria[] | null;
	displayId: number;
	dataset: string | null;
	zadavatel: Subject;
	dodavatele: Subject[] | null;
	nazevZakazky: string | null;
	popisZakazky: string | null;
	dokumenty: Document[] | null;
	cpv: string[] | null;
	datumUverejneni: string | null;
	lhutaDoruceni: string | null;
	datumUzavreniSmlouvy: string | null;
	posledniZmena: string | null;
	stavVZ: number;
	stavZakazky: StavyZakazky;
	lastUpdated: string | null;
	odhadovanaHodnotaBezDPH: number | null;
	konecnaHodnotaBezDPH: number | null;
	odhadovanaHodnotaMena: string | null;
	konecnaHodnotaMena: string | null;
	rawHtml: string | null;
}

export interface Formular {
	cislo: string | null;
	druh: string | null;
	typFormulare: string | null;
	limitVZ: string | null;
	druhRizeni: string | null;
	zverejnen: string | null;
	url: string | null;
	onlyOnProfile: boolean;
}

export interface HodnoticiKriteria {
	poradi: number;
	kriterium: string | null;
	nazev: string | null;
	vaha: number;
}

export interface Subject {
	ico: string | null;
	jmeno: string | null;
}

export interface Document {
	oficialUrl: string | null;
	directUrl: string | null;
	typDokumentu: string | null;
	vlozenoNaProfil: string | null;
	cisloVerze: string | null;
	plainText: string | null;
	plainTextContentQuality: DataQualityEnum;
	lastUpdate: string;
	lastProcessed: string;
	contentType: string | null;
	lenght: number;
	wordCount: number;
	pages: number;
	storageId: string | null;
	plainDocumentId: string | null;
	name: string | null;
	enoughExtractedText: boolean | null;
}

export interface VerejnaZakazkaSearchResultDTO {
	total: number;
	page: number;
	results: VerejnaZakazka[] | null;
}
