export interface FirmaDTO {
	ico: string | null;
	jmeno: string | null;
	datoveSchranky: string[] | null;
	zalozena: string | null;
}

export interface FirmaSocialDTO {
	ico: string | null;
	jmeno: string | null;
	profile: string | null;
	socialniSite: SocialNetworkDTO[] | null;
}

export interface SocialNetworkDTO {
	type: string | null;
	id: string | null;
	url: string | null;
}
