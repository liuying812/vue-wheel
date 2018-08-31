<template>
    <div>
        <h2>简单用法</h2>
        <div style="margin: 20px 0px">
            <v-input value="disabled" disabled></v-input>
            <v-input value="Hello"></v-input>
            <v-input value="readonly" readonly></v-input>
        </div>
        <div style="margin: 20px 0px">
            <v-input value="12"  @change="inputChange"></v-input>
            <v-input value="你" error="不能少于两个字"></v-input>
        </div>

        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>


        <h2>双向绑定</h2>
        <div style="margin: 20px 0px;">
            <v-input v-model="message"></v-input>
            <p>{{message}}</p>
            <button @click="message+=1">+1</button>
        </div>

        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        data() {
            return {
                message: 'hi',
                content1: ` <v-input value="disabled" disabled></v-input>
 <v-input value="Hello"></v-input>
 <v-input value="readonly" readonly></v-input>

 <v-input value="12"  @change="inputChange"></v-input>
 <v-input value="你" error="不能少于两个字"></v-input>
`,
                content2: `<v-input v-model="message"></v-input>
<p>{{message}}</p>
<button @click="message+=1">+1</button>`
            }
        },
        components:{
            'v-input': Input
        }
    }
</script>
