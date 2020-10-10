import Icon from './components/icon'
import Tag from './components/tag'
import { Row, Col } from './components/layout'
import Msgbox from './components/msgbox'
import { IconPicker } from './components/iconpicker'

const components = [
    Icon,
    Tag,
    Row,
    Col,
    IconPicker
];

const install = function(Vue){
    if (this.__installed) {
        return
    }
    this.__installed = true

    components.forEach((component) => {
        Vue.component(component.name, component)
    })

    Vue.prototype.$msgbox = Msgbox
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const EasyuiExtension = {
    install
}

export {
    Icon,
    Tag,
    Row,
    Col,
    Msgbox,
    IconPicker
}

export default EasyuiExtension