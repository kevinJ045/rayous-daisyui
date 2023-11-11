import { Checkbox, Component, InputWrapper, Radio, Text, Widget } from "rayous";
import "../components/styles/main.tail.css";
import { TableController, buildProps } from "rayous/extra";
import { Modal } from "../components/modal";
import { Card } from "../components/card";
import { Accordion } from "../components/accordion";
import { Badge } from "../components/badge";
import { Progress } from "../components/progress";
import { Dropdown } from "../components/dropdown";
import { Button } from "@/components/button";
import { Table } from "@/components/table";
import { RadialProgress } from "@/components/radial-progress";
import { Kbd } from "@/components/kbd";
import { Alert } from "@/components/alert";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			class: 'p-4 space-y-10',
			children: [
				new Table({
					controller: new TableController({
						columns: ['id', 'name', 'address'],
						items: [
							{ id: '1', name: "isle", address: "somewhere" },
							{ id: '2', name: "indi", address: "somewhere else" }
						]
					})
				}),
				new Modal({
					id: 'modal-1',
					content: [
						new Text('Yo!', {
							class: 'font-bold text-lg',
							element: { name: 'h3' }
						}),
						new Text('Close with ESC', {
							class: 'py-4'
						})
					],
					actions: [
						Modal.closer(new Button('Close'))
					]
				}),
				new RadialProgress({
					value: 70,
					variant: 'error'
				}),
				new Kbd('Ctrl'),
				new Alert({
					variant: 'info',
					children: [
						new Widget({element: {name: 'div', html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'}}),
						new Text('Yo!')
					]
				}),
				new Card({
					class: 'bg-base-200',
					title: "Card Title",
					content: [
						new Accordion({
							class: 'bg-base-100',
							accordionName: 'shs',
							opened: true,
							title: "Yo",
							content: [
								new Text('Yo over here!'),
								new Checkbox({
									class: 'checkbox'
								}),
								new Checkbox({
									class: 'toggle'
								}),
								new Radio({
									class: 'radio',
									name: 'radio1'
								}),
								new Radio({
									class: 'radio',
									name: 'radio1'
								}),
								new InputWrapper({
									class: 'range',
									inputType: 'range'
								})
							]
						}),
						new Accordion({
							class: 'bg-base-100 w-[200px]',
							accordionName: 'shs',
							title: new Text("How's this?", {
								children: [
									new Badge({
										title: "jjs",
										variant: 'accent',
										badgeSize: 'lg'
									})
								]
							}),
							content: [
								new Text('Like it?'),
								new Progress({
									value: 40,
									max: 100,
									variant: 'info'
								})
							]
						}),
					],
					actionsClass: 'justify-end',
					actions: [
						new Dropdown({
							items: ['item 1', 'item 2', new Text('item 3')],
							trigger: 'Dropdown',
							triggerClass: Button.optionsToClass({
								variant: 'neutral'
							}),
							dropDownClass: 'bg-base-300'
						}),
						new Button('Action', {
							variant: 'info',
							outline: true,
							onClick(){
								Modal.open('modal-1')
							}
						})
					]
				})
			]
		});
	}
}