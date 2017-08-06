
class ApiResponse {
	constructor(public message : string = '' , public data : any = {}) { }
};

class SuccessApiResponse extends ApiResponse {
	public status = true;
	constructor(message, data) {
		super(message, data);
	}
}

class ErrorApiResponse extends ApiResponse {
	public status = false;
	constructor(message, data) {
		super(message, data);
	}
}


export function ApiMiddleware(req, res, next) {
	res.success = function (message : string = '', data : any = {}) { 
		this.send(new SuccessApiResponse(message, data));
	}
	res.error = function (message : string = '', data : any = {}) { 
		this.send(new ErrorApiResponse(message, data)); 
	}
	next();
}