<template>
    <div class="demo">
        <h2>消息提示框基础用法(examples/components/msgbox/base.vue)</h2>
        <div class="description">
            <p>轻量级的信息反馈组件，在居中显示，3秒后自动消失。有多种不同的提示状态可选择。</p>
        </div>
        <LinkButton @click="handleInfo" style="margin-right:10px;">普通消息</LinkButton>
        <LinkButton @click="handleSucess" style="margin-right:10px;">成功消息</LinkButton>
        <LinkButton @click="handleError" style="margin-right:10px;">错误消息</LinkButton>
        <LinkButton @click="handleLoading" style="margin-right:10px;">显示加载中</LinkButton>
        <LinkButton @click="handleClose" style="margin-right:10px;">关闭消息提示</LinkButton>
    </div>
</template>

<script>
export default {
    name: 'MsgboxBase',
    data() {
        return {

        }
    },
    methods: {
        handleInfo() {
            this.$msgbox.info('这是一条普通消息')
        },
        handleSucess() {
            this.$msgbox.success('这是一条成功消息')
        },
        handleError() {
            this.$msgbox.error('这是一条错误消息')
        },
        handleLoading() {
            this.$msgbox.loading('数据加载中')
        },
        handleClose() {
            this.$msgbox.close()
        }
    }
}
</script>