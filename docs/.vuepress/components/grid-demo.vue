<template>
    <div>
        <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
        </v-row>
        <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
            <v-col>3</v-col>
        </v-row>
        <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
            <v-col>3</v-col>
            <v-col>4</v-col>
        </v-row>
        <pre><code>{{content1}}</code></pre>
        <h2><strong>中间有缝隙</strong></h2>
        <div style="margin-top:20px;">
            <v-row gutter="20">
                <v-col>1</v-col>
                <v-col>2</v-col>
            </v-row>
        </div>
        <pre><code>{{content2}}</code></pre>
        <h2><strong>有缝隙 有偏移</strong></h2>
        <div style="margin-top:20px;">
            <v-row gutter="20">
                <v-col :span="2" >1</v-col>
                <v-col :span="20" offset="2">11</v-col>
            </v-row>
        </div>
        <pre><code>{{content3}}</code></pre>

    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'

    export default {
        data() {
            return {

                content1: `   <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
        </v-row>
        <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
            <v-col>3</v-col>
        </v-row>
        <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
            <v-col>3</v-col>
            <v-col>4</v-col>
        </v-row>
      `,
                content2:`      <v-row gutter="20">
                <v-col>1</v-col>
                <v-col>2</v-col>
            </v-row>`,
                content3:`      <v-row gutter="20">
                <v-col :span="2" >1</v-col>
                <v-col :span="20" offset="2">11</v-col>
            </v-row>`
            }
        },
        components:{
            'v-row': Row,
            'v-col':Col
        }
    }
</script>
