export interface DotaceSearchResultDTO {
	total: number;
	page: number;
	results: Dotace[] | null;
}

export interface Dotace {
	idDotace: string | null;
	datumPodpisu: string | null;
	datumAktualizace: string | null;
	kodProjektu: string | null;
	nazevProjektu: string | null;
	zdroj: Zdroj;
	prijemce: Prijemce;
	program: DotacniProgram;
	dotaceCelkem: number | null;
	pujckaCelkem: number | null;
	rozhodnuti: Rozhodnuti[] | null;
	duplicita: string | null;
	chyba: string[] | null;
}

export interface Zdroj {
	nazev: string | null;
	url: string | null;
}

export interface Prijemce {
	ico: string | null;
	obchodniJmeno: string | null;
	hlidacJmeno: string | null;
	jmeno: string | null;
	rokNarozeni: number | null;
	obec: string | null;
	okres: string | null;
	psc: string | null;
}

export interface DotacniProgram {
	id: string | null;
	nazev: string | null;
	kod: string | null;
	url: string | null;
}

export interface Rozhodnuti {
	castkaPozadovana: number | null;
	castkaRozhodnuta: number | null;
	cerpanoCelkem: number | null;
	jePujcka: boolean | null;
	icoPoskytovatele: string | null;
	poskytovatel: string | null;
	rok: number | null;
	zdrojFinanci: string | null;
	cerpani: Cerpani[] | null;
}

export interface Cerpani {
	castkaSpotrebovana: number | null;
	rok: number | null;
	guessedYear: number | null;
}
