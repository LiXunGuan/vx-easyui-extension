<template>
    <span class="f-field" :class="baseClasses" v-Tooltip="tooltip">
        <input v-if="!multiline" ref="inputRef" autocomplete="off"
            :class="inputClasses"
            :style="inputStyle"
            :value="text"
            :id="inputId"
            :disabled="disabled?'disabled':null"
            :readonly="(readonly||!editable)?'readonly':null"
            :tabindex="tabindex"
            :placeholder="placeholder"
            @input="onInput($event)"
            @focus="focus()"
            @blur="blur()">
    </span>
</template>

<script>
import { InputBase } from 'vx-easyui'
import IconPickerPopup from './iconpicker-popup'

export default {
    name: 'IconPicker',
    extends: InputBase,
    props: {
        value: String,
        position: {
            type: String,
            default: 'top'
        }
    },
    data() {
        return {
            tooltip: {
                position: this.position,
                component: IconPickerPopup,
                showEvent: 'focusin',
                hideEvent: 'mouseleave',
                tooltipCls: 'iconpicker-wrapper',
            }
        }
    },
    methods: {
        setValue(value){
            this.textState = value
            InputBase.methods.setValue.call(this, value)
        },
        onInput(event){
            this.textState = event.target.value
            this.setValue(this.textState)
        }
    },
    created() {
        if (window.EventHub){
            window.EventHub.$on('iconSelect', (icon) => {
                this.setValue(icon)
            })
        }
    }
}
</script>