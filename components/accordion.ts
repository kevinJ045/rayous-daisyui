import { Widget } from "rayous";
import { options } from "rayous/extra";

export interface AccordionOptions extends options {
	opened?: boolean,
	accordionName?: string,
	content?: Array<Widget | null>,
	title?: string | Widget
}

export const Accordion = Widget.model<AccordionOptions>({
	selector: "div.collapse",
	children: [
		{
			selector: "input.state",
			attributes: {
				type: 'radio'
			}
		},
		"div.collapse-title",
		"div.collapse-content"
	],
	options: {
		opened: {
			boolean: {
				'input.state': {
					attr: {
						resolve: true,
						checked: '$opened'
					}
				}
			}
		},
		accordionName: {
			string: {
				'input.state': {
					name: '$accordionName'
				}
			}
		},
		content: {
			type: 'array',
			forEach: {
				widget: {
					'div.collapse-content': {
						append: '$content'
					}
				}
			}
		},
		title: {
			string: {
				'div.collapse-title': {
					text: '$title'
				}
			},
			widget: {
				'div.collapse-title': {
					append: '$title'
				}
			}
		}
	}
});