import { Widget } from "rayous";
import { options } from "rayous/extra";

// Class Dependency List
// class = 'badge';
// class = 'badge-neutral';
// class = 'badge-primary';
// class = 'badge-accent';
// class = 'badge-info';
// class = 'badge-warning';
// class = 'badge-error';
// class = 'badge-success';
// class = 'badge-lg';
// class = 'badge-md';
// class = 'badge-sm';
// class = 'badge-xs';


export type badgeVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'success' | 'error';
export type badgeSize = 'sm' | 'lg' | 'md' | 'xs' | 'normal';

export interface BadgeOptions extends options {
	variant?: badgeVariant,
	badgeSize?: badgeSize,
	title?: string
}

const defaultOptions: BadgeOptions = {
	variant: "neutral",
	badgeSize: "normal"
}

export const Badge = Widget.model<BadgeOptions>({
	selector: 'div.badge',
	options: {
		title: {
			string: {
				this: {
					text: '$title'
				}
			},
			widget: {
				this: {
					append: '$title'
				}
			}
		},
		variant: {
			string: {
				this: {
					addClass: 'badge-$(variant)'
				}
			}
		},
		badgeSize: {
			string: {
				this: {
					addClass: 'badge-$(variant)'
				}
			}
		}
	}
}, defaultOptions)