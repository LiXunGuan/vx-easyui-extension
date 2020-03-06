<template>
    <div class="demo demo-layout">
        <h2>混合布局(examples/components/layout/mixed.vue)</h2>
        <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
        <Row :gutter="20">
            <iCol :span="16"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="8"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row :gutter="20">
            <iCol :span="8"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="8"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row :gutter="20">
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="16"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'LayoutMixed'
}
</script>
