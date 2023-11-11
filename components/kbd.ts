import { Text, Widget } from "rayous";
import { textOptions } from "rayous/client/widgets/main/Text";
import { options } from "rayous/extra";


export class Kbd extends Text {
	constructor(selectedOptions: string | textOptions, otheroptions: textOptions | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, {
			class: 'kbd',
			element: { name: 'kbd' }
		});
		super(options);
	}
}