<template>
    <div>
        <v-button>默认按钮</v-button>
        <v-button :loading="loading1" @click="loading1 = !loading1">按钮</v-button>
        <v-button  icon="shezhi" :loading="loading2" @click="loading2 = !loading2">按钮</v-button>
        <v-button  icon="shezhi" icon-position="right" :loading="loading3" @click="loading3 = !loading3">
            按钮
        </v-button>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>

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
                content: `
        <v-button>默认按钮</v-button>

        <v-button :loading="loading1"
        @click="loading1 = !loading1">按钮</v-button>

        <v-button  icon="shezhi" :loading="loading2"
        @click="loading2 = !loading2">按钮</v-button>

        <v-button  icon="shezhi" :loading="loading3" icon-position="right"
        @click="loading3 = !loading3"> 按钮</v-button>

        loading1: false, loading2: true, loading3: false,
      `
            }
        },
        components:{
            'v-button': Button
        }
    }
</script>
