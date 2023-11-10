import { Widget } from "rayous";
import { options } from "rayous/extra";

export interface DropdownOptions extends options {
	items?: (Widget|null|string)[],
	trigger?: Widget | string, 
	triggerClass?: string, 
	dropDownClass?: string
}

export const Dropdown = Widget.model<DropdownOptions>({
	selector: "details.dropdown",
	children: [
		"summary.dropdown-trigger",
		"ul.menu.dropdown-content"
	],
	options: {
		items: {
			type: 'array',
			forEach: {
				'widget': {
					'ul.menu': {
						'append': {
							selector: 'li',
							child: '$item'
						}
					}
				},
				'string': {
					'ul.menu': {
						'append': {
							selector: 'li',
							text: '$item'
						}
					}
				}
			}
		},
		trigger: {
			widget: {
				'summary.dropdown-trigger': {
					'append': '$trigger'
				}
			},
			string: {
				'summary.dropdown-trigger': {
					'text': '$trigger'
				}
			}
		},
		triggerClass: {
			string: {
				'summary.dropdown-trigger': {
					'addClass': '$triggerClass'
				}
			}
		},
		dropDownClass: {
			string: {
				'ul.menu.dropdown-content': {
					'addClass': '$dropDownClass'
				}
			}
		}
	}
}, {
	items: [],
	trigger: {}
});