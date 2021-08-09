import type { SocialNetworkDTO } from './Firmy';

export interface Osoba {
	idPuvodce: string | null;
	idOsoby: string | null;
	plneJmeno: string | null;
	role: string | null;
	typ: string | null;
	ico: string | null;
	rc: string | null;
	zalozen: string | null;
	odstranen: string | null;
	datumNarozeni: string | null;
	mesto: string | null;
	okres: string | null;
	zeme: string | null;
	psc: string | null;
	osobaId: string | null;
}

export interface OsobaDetailDTO {
	titulPred: string | null;
	jmeno: string | null;
	prijmeni: string | null;
	titulPo: string | null;
	narozeni: string | null;
	nameId: string | null;
	profile: string | null;
	sponzoring: OsobaEventDTO[] | null;
	udalosti: OsobaEventDTO[] | null;
	socialniSite: SocialNetworkDTO[] | null;
}

export interface OsobaEventDTO {
	typ: string | null;
	organizace: string | null;
	role: string | null;
	castka: number | null;
	datumOd: string | null;
	datumDo: string | null;
}

export interface OsobaDTO {
	titulPred: string | null;
	jmeno: string | null;
	prijmeni: string | null;
	titulPo: string | null;
	narozeni: string | null;
	nameId: string | null;
	profile: string | null;
}

export interface OsobaSocialDTO {
	titulPred: string | null;
	jmeno: string | null;
	prijmeni: string | null;
	titulPo: string | null;
	nameId: string | null;
	profile: string | null;
	socialniSite: SocialNetworkDTO[] | null;
}
