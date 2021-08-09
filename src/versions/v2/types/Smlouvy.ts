import type { DataQualityEnum, ImportanceLevel, PravniRamce } from '../../Constants';

export interface SmlouvaSearchResultDTO {
	total: number;
	page: number;
	results: Smlouva[] | null;
}

export interface Smlouva {
	calculatedPriceWithVATinCZK: number;
	calcutatedPriceQuality: DataQualityEnum;
	casZverejneni: string;
	cisloSmlouvy: string | null;
	ciziMena: TSmlouvaCiziMena;
	classification: SClassification;
	confidenceValue: number;
	datumUzavreni: string;
	enhancements: Enhancement[] | null;
	hodnotaBezDph: number | null;
	hodnotaVcetneDph: number | null;
	id: string | null;
	issues: Issue[] | null;
	lastUpdate: string;
	navazanyZaznam: string | null;
	odkaz: string | null;
	platce: Subjekt;
	platnyZaznam: boolean;
	pravniRamec: PravniRamce;
	predmet: string | null;
	prijemce: Subjekt[] | null;
	prilohy: Priloha[] | null;
	schvalil: string | null;
	souvisejiciSmlouvy: string[] | null;
	spadaPodRS: boolean;
	sVazbouNaPolitiky: boolean | null;
	sVazbouNaPolitikyAktualni: boolean | null;
	sVazbouNaPolitikyNedavne: boolean | null;
	hint: HintSmlouva;
	vkladatelDoRejstriku: Subjekt;
}

export type TSmlouvaCiziMena = Record<string, unknown>;

export interface SClassification {
	lastUpdate: string | null;
	version: number;
	/** @deprecated */
	types: Classification[] | null;
	class1: Classification;
	class2: Classification;
	class3: Classification;
}

export interface Enhancement {
	created: string;
	title: string | null;
	description: string | null;
	changed: Change;
	public: boolean;
	enhancerType: string | null;
}

export interface Issue {
	issueTypeId: number;
	created: string;
	title: string | null;
	textDescription: string | null;
	public: boolean;
	permanent: boolean;
	importance: ImportanceLevel;
	affectedParams: KeyValue[] | null;
	analyzerType: string | null;
}

export interface Subjekt {
	adresa: string | null;
	datovaSchranka: string | null;
	ico: string | null;
	nazev: string | null;
	utvar: string | null;
}

export interface Priloha {
	plainTextContent: string | null;
	plainTextContentQuality: DataQualityEnum;
	lastUpdate: string;
	localCopy: string | null;
	contentType: string | null;
	lenght: number;
	wordCount: number;
	uniqueWordsCount: number;
	wordsVariance: number;
	pages: number;
	enoughExtractedText: boolean;
}

export interface HintSmlouva {
	updated: string | null;
	smlouvaULimitu: number;
	denUzavreni: number;
	smlouvaSPolitickyAngazovanymSubjektem: number;
	pocetDniOdZalozeniFirmy: number;
	vztahSeSoukromymSubjektem: number;
	skrytaCena: number;
}

export interface Classification {
	typeValue: number;
	classifProbability: number;
	rootClassification: boolean;
}

export interface Change {
	parameterName: string | null;
	previousValue: string | null;
	newValue: string | null;
}

export interface KeyValue {
	key: string | null;
	value: string | null;
}
