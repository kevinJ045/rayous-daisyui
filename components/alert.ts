import { Widget } from "rayous";
import { options } from "rayous/extra";

// class = 'alert-info'
// class = 'alert-success'
// class = 'alert-error'
// class = 'alert-warning'

export interface AlertOptions extends options {
	variant?: 'info' | 'success' | 'error' | 'warning'
}

export const Alert = Widget.model<AlertOptions>({
	selector: 'div.alert',
	options: {
		variant: {
			string: {
				this: {
					addClass: 'alert-$(variant)'
				}
			}
		}
	}
}, {});