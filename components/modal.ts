import * as rayous from "rayous";
import { options, mergeOptions } from "rayous/extra";

const modals: Modal[] = [];

export interface ModalOptions extends options{
	actions?: (rayous.Widget | null)[],
	content?: (rayous.Widget | null)[]
}

export class Modal extends rayous.Widget {

	constructor(options: ModalOptions | null = null){
		super(mergeOptions({
			element: { name: 'dialog' },
			class: 'modal',
			_setters: ['actions', 'content'],
			children: [
				new rayous.Widget({class: 'modal-box', children: [
					new rayous.Widget({class: 'modal-content'}),
					new rayous.Widget({class: 'modal-action'})
				]})
			]
		}, options || {}));
		modals.push(this);
	}

	addContent(child: rayous.Widget){
		this.add(child, '.modal-content');
		return this;
	}

	set actions(actions: (rayous.Widget | null)[]){
		this.find('.modal-action').remove('*');
		actions.forEach(action => action ? this.find('.modal-action').add(action) : null);
	}
	
	set content(content: (rayous.Widget | null)[]){
		this.find('.modal-content').remove('*');
		content.forEach(content => content ? this.find('.modal-content').add(content) : null);
	}

	open(){
		this.raw().at(0).showModal();
		return this;
	}

	static open(id: string){
		let modal: Modal | undefined = modals.find(modal => modal.attr('id') == id);
		if(modal){
			return modal.open();
		} else {
			return null;
		}
	}

	static closer(child: rayous.Widget){
		return new rayous.Widget({
			element: { name: 'form' },
			attr: { method: 'dialog' },
			children: [ child ]
		})
	}
}