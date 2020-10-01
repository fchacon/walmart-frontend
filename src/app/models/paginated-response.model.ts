export class PaginatedResponse<T> {
	public data: Array<T>;
	public total: number;

	constructor() {
		this.data = new Array<T>();
	}
}
