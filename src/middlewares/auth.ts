


export const AuthMiddleware = (req : Express.Request, res : Express.Response, next: Function) => {
	// do authorization check
	next();
}