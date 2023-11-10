import { Button as RayousButton } from "rayous";
import { options } from "rayous/client/extra";

// Class Dependency List
// class = 'btn';
// class = 'btn-primary';
// class = 'btn-secondary';
// class = 'btn-accent';
// class = 'btn-info';
// class = 'btn-warning';
// class = 'btn-success';
// class = 'btn-error';
// class = 'btn-link';
// class = 'btn-sm';
// class = 'btn-md';
// class = 'btn-xs';
// class = 'btn-lg';
// class = 'btn-square';
// class = 'btn-circle';

export type buttonVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'success' | 'error' | 'link';
export type buttonSize = 'sm' | 'lg' | 'md' | 'xs';
export type buttonShape = 'square' | 'circle';

export interface ButtonOptions extends options {
	variant?: buttonVariant,
	outline?: boolean,
	wide?: boolean,
	btnSize?: buttonSize,
	shape?: buttonShape
}

function classFromOptions(options: ButtonOptions){
	let classes = ["btn"];
	if(options.variant) classes.push('btn-'+options.variant);
	if(options.outline) classes.push('btn-outline');
	if(options.wide) classes.push('btn-wide');
	if(options.btnSize) classes.push('btn-'+options.btnSize);
	if(options.shape) classes.push('btn-'+options.shape);

	return classes.join(' ');
}

function _initButton(button: Button){
	let options: ButtonOptions = button.options;
	button.addClass(classFromOptions(options));
}

export class Button extends RayousButton {
	constructor(options: string | ButtonOptions, otheroptions: ButtonOptions | null = null){
		super(options, otheroptions);

		_initButton(this);
	}
	_optionChange() {
		_initButton(this);
	}
	set variant(variant: buttonVariant){
		this.options.variant = variant;
	}
	set outline(outline: boolean){
		this.options.outline = outline;
	}

	static optionsToClass(options: ButtonOptions){
		return classFromOptions(options);
	}
}