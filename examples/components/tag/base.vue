<template>
    <div class="demo">
        <h2>基础布局(examples/components/tag/base.vue)</h2>
        <p>对不同维度进行简单的标记和分类。</p>
        <hr />
        <Tag color="default">default</Tag>
        <Tag color="primary">primary</Tag>
        <Tag color="success">success</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="yellow">yellow</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
        <Tag color="#FFA2D3">Custom Color</Tag>
        <br><br>
        <Tag type="border" closable color="primary">标签一</Tag>
        <Tag type="border" closable color="success">标签二</Tag>
        <Tag type="border" closable color="error">标签三</Tag>
        <Tag type="border" closable color="warning">标签四</Tag>
        <br><br>
        <Tag type="dot" closable color="primary">标签一</Tag>
        <Tag type="dot" closable color="success">标签二</Tag>
        <Tag type="dot" closable color="error">标签三</Tag>
        <Tag type="dot" closable color="warning">标签四</Tag>
    </div>
</template>

<script>
export default {
    name: 'TagBase'
}
</script>
