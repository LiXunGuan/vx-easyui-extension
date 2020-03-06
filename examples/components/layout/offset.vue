<template>
    <div class="demo demo-layout">
        <h2>分栏偏移(examples/components/layout/offset.vue)</h2>
        <p>支持偏移指定的栏数。</p>
        <div class="description">
            <p>通过制定 col 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。</p>
        </div>
        <Row :gutter="20">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6" :offset="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row :gutter="20">
            <iCol :span="6" :offset="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6" :offset="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row :gutter="20">
            <iCol :span="12" :offset="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'LayoutOffset'
}
</script>
