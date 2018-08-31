<template>
    <div>
        <p><strong>默认样式</strong></p>
        <v-button>默认按钮</v-button>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <p><strong>点击出现icon</strong></p>
        <v-button :loading="loading1" @click="loading1 = !loading1">按钮</v-button>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

        <p><strong>点击切换icon</strong></p>
        <v-button  icon="shezhi" :loading="loading2" @click="loading2 = !loading2">按钮</v-button>
        <v-button  icon="shezhi" icon-position="right" :loading="loading3" @click="loading3 = !loading3">
            按钮
        </v-button>
        <p><strong>代码</strong></p>
        <pre><code>{{content3}}</code></pre>


    </div>
</template>
<script>
    import Button from '../../../src/button'

    export default {
        data() {
            return {
                loading1: false,
                loading2: true,
                loading3: false,
                content1: `    <v-button>默认按钮</v-button> `,
                content2:`    data:{ loading1: false }

        <v-button :loading="loading1"
        @click="loading1 = !loading1">按钮</v-button>`,
                content3:`    data:{ loading2: true, loading3: false }

        <v-button  icon="shezhi" :loading="loading2"
        @click="loading2 = !loading2">按钮</v-button>

        <v-button  icon="shezhi" :loading="loading3" icon-position="right"
        @click="loading3 = !loading3"> 按钮</v-button>`
            }
        },
        components:{
            'v-button': Button
        }
    }
</script>
