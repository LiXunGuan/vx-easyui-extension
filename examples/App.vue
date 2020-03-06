<template>
    <Layout class="f-full f-column">
        <LayoutPanel region="west" title="组件导航" :split="true" :collapsible="true" :expander="true" :panelStyle="{width:'300px'}">
            <Tree :data="menus" @nodeClick="nodeClick"></Tree>
        </LayoutPanel>
        <LayoutPanel region="center" bodyCls="f-column" style="height:100%" :border="false">
            <Tabs ref="tabs" class="f-full" :scrollable="true" @tabClose="tabClose">
                <TabPanel bodyCls="f-column" v-for="tab in tabs" :key="tab.code" :title="tab.title" :closable="tab.closable">
                    <component :is="tab.component"></component>
                </TabPanel>
            </Tabs>
        </LayoutPanel>
    </Layout>
</template>

<script>
import Home from './Home'
import IconBase from './components/icon/base'
import LayoutBase from './components/layout/base'
import LayoutMixed from './components/layout/mixed'
import LayoutGutter from './components/layout/gutter'
import LayoutOffset from './components/layout/offset'
import LayoutFlex from './components/layout/flex'
import IconPickerBase from './components/iconpicker/base'
import MsgboxBase from './components/msgbox/base'
import TagBase from './components/tag/base'


export default {
    text: 'App',
    data() {
        return {
            menus: [
                {
                    text: 'Icon 图标',
                    children: [
                        {
                            text: '图标用法',
                            code: 'icon.base',
                        },
                    ]
                },
                {
                    text: 'layout 布局',
                    state: 'closed',
                    children: [
                        {
                            text: '基础布局',
                            code: 'layout.base',
                        },
                        {
                            text: '分栏间隔布局',
                            code: 'layout.gutter',
                        },
                        {
                            text: '混合布局',
                            code: 'layout.mixed',
                        },
                        {
                            text: '分栏偏移',
                            code: 'layout.offset',
                        },
                        {
                            text: '对齐方式',
                            code: 'layout.flex',
                        }
                    ]
                },
                {
                    text: "IconPicker 图标选择器",
                    state: 'closed',
                    children: [
                        {
                            text: "图标选择器-基础用法",
                            code: 'iconpicker.base',
                        }
                    ]
                },
                {
                    text: 'msgbox 消息提示框',
                    state: 'closed',
                    children: [
                        {
                            text: '消息提示框基础用法',
                            code: 'msgbox.base'
                        }
                    ]
                },
                {
                    text: 'Tag 标签',
                    state: 'closed',
                    children: [
                        {
                            text: '标签基础用法',
                            code: 'tag.base'
                        }
                    ]
                }
            ],
            tabs: [
                {
                    title: '主页',
                    component: Home,
                    closable: false
                }
            ],
            components: {
                'icon.base': IconBase,
                'layout.base': LayoutBase,
                'layout.mixed' : LayoutMixed,
                'layout.gutter': LayoutGutter,
                'layout.offset': LayoutOffset,
                'layout.flex': LayoutFlex,
                'iconpicker.base': IconPickerBase,
                'msgbox.base': MsgboxBase,
                'tag.base': TagBase
            }
        }
    },
    methods: {
        nodeClick(node) {
            if (node.children && !node.code) {
                return null
            }
            let index = this.tabs.findIndex((v) => v.title == node.text)
            if (index > -1) {
                return this.$refs.tabs.select(index)
            }
            this.createTab(node)
        },
        tabClose(panel) {
            this.tabs = this.tabs.filter(p => p.title != panel.title)
        },
        createTab(node) {
            this.tabs.push({
                code: node.code,
                title: node.text,
                closable: true,
                component: this.components[node.code]
            })
            this.$nextTick(() => {
                this.$refs.tabs.select(this.tabs.length - 1)
            })
        }
    }
}
</script>

<style>
body {
    font-family: tahoma,arial,'微软雅黑',sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #495060;
}

html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
}
</style>