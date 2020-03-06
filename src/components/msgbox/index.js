import Vue from 'vue'
import Msgbox from './msgbox'

let defaultDuration = 3000
let instance = null // 单例

function message(content, duration = defaultDuration, type, onClose) {
	if (!onClose) {
		onClose = () => {

        }
	}
	closeMessage()
	
	const compo = Vue.extend(Msgbox)

	instance = new compo({
		propsData: {
			type: type,
			content: content,
			duration: duration,
			onClose: onClose
		}
	})

	instance.$on('close', () => {
		instance = null
	})

    instance.$mount()
	document.body.appendChild(instance.$el)
	
}

function closeMessage(){
	if (instance) {
		instance.close()
		instance = null
	}
}

export default {
	info (content, duration, onClose) {
		return message(content, duration, 'info', onClose)
	},
	success (content, duration, onClose) {
		return message(content, duration, 'success', onClose)
	},
	error (content, duration, onClose) {
		return message(content, duration, 'error', onClose)
	},
	loading (content, duration, onClose) {
		return message(content, duration, 'loading', onClose)
	},
	close() {
		closeMessage()
	}
}