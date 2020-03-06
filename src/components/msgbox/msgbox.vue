<template>
<div class="cywebos-message">
    <div class="cywebos-message-inner">
        <div class="cywebos-message-left"></div>
        <div class="msgbox-body">
            <span :class="['msgbox-body-icon', 'msgbox-icon-' + type]"></span>
            <span class="msgbox-body-msg">{{ content }}</span>
        </div>
        <div class="cywebos-message-right"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'info',
            validator: (value) => {
                return ['info', 'success', 'error', 'loading'].indexOf(value) !== -1
            }
        },
        content: {
            type: String
        },
        duration: {
            type: Number,
            default : 3000
        },
        onClose: Function,
    },
    data() {
        return {
            timer: null,
            closed: false
        }
    },
    methods: {
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close()
                    }
                }, this.duration)
            }
        },
        clearTimer() {
            clearTimeout(this.timer)
        },
        close() {
            this.clearTimer()
            this.closed = true
            this.$emit('close')
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
            if (typeof this.onClose === 'function') {
                this.onClose()
            }
        }
    },
    mounted() {
        this.startTimer()
    }
}
</script>