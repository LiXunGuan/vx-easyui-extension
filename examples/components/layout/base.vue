<template>
    <div class="demo demo-layout">
        <h2>基础布局(examples/components/layout/base.vue)</h2>
        <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
        <div class="description">
            <p>通过 Row 和 iCol 组件，并通过 iCol 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>
        </div>
        <Row>
            <iCol :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </iCol>
        </Row>
        <Row>
            <iCol :span="12"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="12"><div class="grid-content bg-purple-light"></div></iCol>
        </Row>
        <Row>
            <iCol :span="8"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="8"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="8"><div class="grid-content bg-purple"></div></iCol>
        </Row>
        <Row>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="6"><div class="grid-content bg-purple-light"></div></iCol>
        </Row>
        <Row>
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple-light"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple"></div></iCol>
            <iCol :span="4"><div class="grid-content bg-purple-light"></div></iCol>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'LayoutBase'
}
</script>
