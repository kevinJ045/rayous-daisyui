import * as Rayous from "rayous";
import { TableOptions, mergeOptions } from "rayous/extra";



export class Table extends Rayous.Table {
	constructor(options: TableOptions){
		super(mergeOptions({
			class: 'table',
		}, options));
	}
}