export const ApiBase = 'https://www.hlidacstatu.cz/api';

export const enum SortingOrder {
	Ascending,
	Descending,
}

export const enum HTTPVersionPolicy {
	Zero,
	One,
	Two,
}

export const enum HTTPStatusCodes {
	Continue = 100,
	SwitchingProtocol,
	Processing,
	EarlyHints,

	Ok = 200,
	Created,
	Accepted,
	NonAuthoritativeInformation,
	NoContent,
	ResetContent,
	PartialContent,
	MultiStatus,
	AlreadyReported,

	IMUsed = 226,

	MultipleChoice = 300,
	MovedPermanently,
	Found,
	SeeOther,
	NotModified,
	UseProxy,
	// 306 is unused
	TemporaryRedirect = 307,
	PermanentRedirect,

	BadRequest = 400,
	Unauthorized,
	PaymentRequired,
	Forbidden,
	NotFound,
	MethodNotAllowed,
	NotAcceptable,
	ProxyAuthenticationRequired,
	RequestTimeout,
	Conflict,
	Gone,
	LengthRequired,
	PreconditionFailed,
	PayloadTooLarge,
	URITooLong,
	UnsupportedMediaType,
	RangeNotSatisfiable,
	ExpectationFailed,

	MisdirectedRequest = 421,
	UnprocessableEntity,
	Locked,
	FailedDependency,
	TooEarly,
	UpgradeRequired,

	PreconditionRequired = 428,
	TooManyRequests,

	RequestHeaderFieldsTooLarge = 431,

	UnavailableForLegalReasons = 451,

	InternalServerError = 500,
	NotImplemented,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout,
	HTTPVersionNotSupported,
	VariantAlsoNegotiates,
	InsufficientStorage,
	LoopDetected,

	NotExtended = 510,
	NetworkAuthenticationRequired,
}

export const enum ZaznamyMode {
	Skip = 'skip',
	Merge = 'merge',
	Rewrite = 'rewrite',
}

export const enum DotaceHledatRazeni {
	Relevance,
	SignatureDateDescending,
	SignatureDateAscending,
	ValueDescending,
	ValueAscending,
	BusinessIdDescending,
	BusinessIdAscending,
}

export const enum SocialNetwork {
	Zero,
	One,
	Two,
	Three,
	Four,
	Five,
	Six,
}

export const enum InsolvenceHledatRazeni {
	Relevance,
	StartedDescending,
	PublishedDescending,
	ModifiedDescending,
	ModifiedAscending,
}

export const enum DataQualityEnum {
	Zero,
	One,
	Two,
	Three,
	Four,
	Five,
}

export const enum PravniRamce {
	Zero,
	One,
	Two,
	Three,
}

export const enum ImportanceLevel {
	Zero,
	One,

	Five = 5,

	Twenty = 20,

	OneHundred = 100,

	NegativeOne = -1,
}

export const enum SmlouvyHledatRazeni {
	Relevance,
	PublishedDescending,
	PublishedAscending,
	PriceAscending,
	PriceDescending,
	ClosedDescending,
	ClosedAscending,
	ErrorCountDescending,
	Customer,
	Supplier,
}

export const enum StavyZakazky {
	Zero,
	One,

	Fifty = 50,

	OneHundred = 100,

	TwoHundred = 200,

	ThreeHundred = 300,
}

export const enum VerejnezakazkyHledatRazeni {
	Relevance,
	PublishedDescending,
	PublishedAscending,
	PriceAscending,
	PriceDescending,
	ClosedDescending,
	ClosedAscending,

	Customer = 8,
	Supplier,
}
