<template>
    <div style="margin-top: 60px">

        <v-popover>
            <template slot="content">
                <div>弹出内容</div>
            </template>
            <v-button>点我</v-button>
        </v-popover>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'

    export default {
        data() {
            return {

                content: `
        <v-popover>
            <template slot="content">
                <div>弹出内容</div>
            </template>
            <v-button>点我</v-button>
        </v-popover>


      `
            }
        },
        components:{
            'v-popover': Popover,
            'v-button': Button
        }
    }
</script>
