import { Widget } from "rayous";
import { options } from "rayous/extra";

// class = 'bg-error';
// class = 'bg-info';
// class = 'bg-success';
// class = 'bg-warning';
// class = 'bg-primary';
// class = 'bg-accent';
// class = 'bg-seconday';

export interface RadialProgressOptions extends options {
	value?: number;
	variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'success' | 'error'
}

export const RadialProgress = Widget.model<RadialProgressOptions>({
	selector: 'div.radial-progress',
	options: {
		variant: {
			string: {
				this: {
					addClass: 'text-$(variant)'
				}
			}
		},
		value: {
			number: {
				this: {
					style: {
						resolve: true,
						'--value': '$value'
					},
					text: '$(value)%'
				}
			}
		}
	}
});