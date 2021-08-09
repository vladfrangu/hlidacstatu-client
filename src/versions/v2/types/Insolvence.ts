import type { Osoba } from './Osoby';

export interface RizeniSearchResultDTO {
	total: number;
	page: number;
	results: Rizeni[] | null;
}

export interface Rizeni {
	isFullRecord: boolean;
	spisovaZnacka: string | null;
	stav: string | null;
	vyskrtnuto: string | null;
	url: string | null;
	datumZalozeni: string | null;
	posledniZmena: string;
	soud: string | null;
	dokumenty: Dokument[] | null;
	dluznici: Osoba[] | null;
	veritele: Osoba[] | null;
	spravci: Osoba[] | null;
	onRadar: boolean;
	odstraneny: boolean;
}

export interface Dokument {
	id: string | null;
	typUdalosti: number;
	datumVlozeni: string;
	popis: string | null;
	url: string | null;
	oddil: string | null;
	plainText: string | null;
	lenght: number;
	wordCount: number;
	lastUpdate: string | null;
	enoughExtractedText: boolean;
}
