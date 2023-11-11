import { Widget } from "rayous";
import { options } from "rayous/extra";

// class = 'progress-error';
// class = 'progress-info';
// class = 'progress-success';
// class = 'progress-warning';
// class = 'progress-primary';
// class = 'progress-accent';
// class = 'progress-seconday';

export interface ProgressOptions extends options {
	max?: number;
	value?: number;
	variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'success' | 'error'
}

export const Progress = Widget.model<ProgressOptions>({
	selector: 'progress.progress',
	options: {
		variant: {
			string: {
				this: {
					addClass: 'progress-$(variant)'
				}
			}
		},
		value: {
			number: {
				this: {
					attr: {
						resolve: true,
						value: '$value'
					}
				}
			}
		},
		max: {
			number: {
				this: {
					attr: {
						resolve: true,
						max: '$max'
					}
				}
			}
		}
	}
});