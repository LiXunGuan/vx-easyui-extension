<template>
    <div class="demo demo-layout">
        <h2>分栏偏移(examples/components/layout/flex.vue)</h2>
        <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
        <div class="description">
            <p>将 <code>type</code> 属性赋值为 'flex'，可以启用 flex 布局，并可通过 <code>justify</code> 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p>
        </div>
        <Row type="flex" class="row-bg">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row type="flex" class="row-bg" justify="center">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row type="flex" class="row-bg" justify="end">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row type="flex" class="row-bg" justify="space-between">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
            <Row type="flex" class="row-bg" justify="space-around">
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'LayoutFlex'
}
</script>
