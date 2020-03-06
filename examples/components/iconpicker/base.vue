<template>
    <div class="demo">
        <h2>图标选择器(examples/components/iconpicker/base.vue)</h2>
        <Icon :type="icon" :size="32"></Icon>
        <IconPicker v-model="icon"></IconPicker>
    </div>
</template>

<script>
export default {
    name: 'IconPickerBase',
    data() {
        return {
            icon: 'ios-car'
        }
    }
}
</script>