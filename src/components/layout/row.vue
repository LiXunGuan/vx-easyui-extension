<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
import { domHelper } from 'vx-easyui'
import { findComponentDownward, findBrothersComponents } from '@/helpers/functions'

const prefixCls = 'cy-row'

export default {
    name: 'Row',
    props: {
        type: {
            validator (value) {
                return ['flex'].indexOf(value) !== -1
            }
        },
        align: {
            validator (value) {
                return ['top', 'middle', 'bottom'].indexOf(value) !== -1
            }
        },
        justify: {
            validator (value) {
                return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) !== -1
            }
        },
        gutter: {
            type: Number,
            default: 0
        },
        className: String
    },
    computed: {
        classes () {
            return [
                {
                    [`${prefixCls}`]: !this.type,
                    [`${prefixCls}-${this.type}`]: !!this.type,
                    [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                    [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                    [`${this.className}`]: !!this.className
                }
            ]
        },
        styles () {
            let style = {}
            if (this.gutter !== 0) {
                style = {
                    marginLeft: domHelper.toStyleValue(this.gutter / -2),
                    marginRight: domHelper.toStyleValue(this.gutter / -2)
                }
            }
            return style
        }
    },
    watch: {
        gutter (val) {
            this.updateGutter(val)
        }
    },
    methods: {
        updateGutter (val) {
            // 这里会嵌套寻找，把 Col 里的 Row 里的 Col 也找到，所以用 兄弟找
            const Col = findComponentDownward(this, 'iCol')
            const Cols = findBrothersComponents(Col, 'iCol', false)

            if (Cols.length) {
                Cols.forEach((child) => {
                    if (val !== 0) {
                        child.gutter = val
                    }
                })
            }
        }
    }
}
</script>