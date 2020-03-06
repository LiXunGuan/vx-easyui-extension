<template>
    <div class="iconpicker-wrapper-inner">
        <div class="iconpicker-title">
            <TextBox v-model.trim="q" :placeholder="placeholder" style="width:100%"></TextBox>
        </div>
        <div class="iconpicker-content" ref="listRef">
            <ul>
                <li v-for="(icon, index) in filteredIcons" :key="index" :class="isSelected(icon)" @click="handleSelected(icon)">
                    <Icon :type="icon"  size="32"></Icon>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Icon from '../icon/icon.vue'
import data from './icons.json'

export default {
    name: 'IconPickerPopup',
    components: {
        Icon
    },
    data() {
        return {
            q: '',
            icons: data,
            selected: null,
            placeholder: 'Type to filter',
        }
    },
    computed: {
        filteredIcons() {
            return this.icons.filter(v => v.includes(this.q))
        }
    },
    methods: {
        isSelected(icon) {
            return this.selected == icon ? 'selected' : null
        },
        handleSelected(icon) {
            this.selected = icon
            if (window.EventHub){
                window.EventHub.$emit('iconSelect', icon)
            }
        },
        scrollToSelected() {
            let selected = this.$refs.listRef.querySelector('.selected')
            if (selected) {
                selected.scrollIntoView()
            }
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.scrollToSelected()
        // }, 300)
    }
}
</script>