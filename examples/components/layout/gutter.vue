<template>
    <div class="demo demo-layout">
        <h2>分栏间隔(examples/components/layout/gutter.vue)</h2>
        <p>分栏之间存在间隔。</p>
        <div class="description">
            <p>Row 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
        </div>
        <Row :gutter="20">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'LayoutGutter'
}
</script>
