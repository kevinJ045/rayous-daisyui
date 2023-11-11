import { Widget } from "rayous";
import { options } from "rayous/extra";

// Class Dependency List
// class = 'loading';
// class = 'loading-spinner';
// class = 'loading-dots';
// class = 'loading-ring';
// class = 'loading-ball';
// class = 'loading-bars';
// class = 'loading-infinity';
// class = 'loading-lg';
// class = 'loading-md';
// class = 'loading-sm';
// class = 'loading-xs';

// class = 'text-primary text-secondary text-accent text-neutral text-info text-success text-warning text-error'


export type loadingVariant = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
export type loadingSize = 'sm' | 'lg' | 'md' | 'xs' | 'normal';

export interface LoadingOptions extends options {
	variant?: loadingVariant,
	loadingSize?: loadingSize,
	color?: string
}

const defaultOptions: LoadingOptions = {
	variant: "spinner",
	loadingSize: "normal"
}

export const Loading = Widget.model<LoadingOptions>({
	selector: 'div.loading',
	options: {
		color: {
			string: {
				this: {
					addClass: 'text-$(color)'
				}
			}
		},
		variant: {
			string: {
				this: {
					addClass: 'loading-$(variant)'
				}
			}
		},
		loadingSize: {
			string: {
				this: {
					addClass: 'loading-$(variant)'
				}
			}
		}
	}
}, defaultOptions)