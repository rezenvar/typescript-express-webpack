
declare namespace Express {
	export interface Response {
		success(message?: string, data?: any): Function
		error(message?: string, data?: any): Function
	}
}

