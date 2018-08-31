<template>
    <div>
        <v-tabs :selected.sync="selectedTab" >
            <v-tabs-head>
                <template slot="actions">
                    <v-button>setting</v-button>
                </template>
                <v-tabs-item name="1">Tab 1</v-tabs-item>
                <v-tabs-item name="2">Tab 2</v-tabs-item>
                <v-tabs-item name="3">Tab 3</v-tabs-item>
                <v-tabs-item name="disabled" disabled>disabled Tab</v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="1">Content one</v-tabs-pane>
                <v-tabs-pane name="2">Content two</v-tabs-pane>
                <v-tabs-pane name="3">Content three</v-tabs-pane>
            </v-tabs-body>
        </v-tabs>
        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import Tabs from '../../../src/tabs'
    import TabsBody from '../../../src/tabs-body'
    import TabsHead from '../../../src/tabs-head'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'
    import Button from  '../../../src/button'

    export default {
        data() {
            return {
                selectedTab: '3',
                content: `
        data:{
            selected: '1'
        }

        <v-tabs :selected.sync="selectedTab" >
            <v-tabs-head>
                <template slot="actions">
                    <v-button>setting</v-button>
                </template>
                <v-tabs-item name="1">Tab 1</v-tabs-item>
                <v-tabs-item name="2">Tab 2</v-tabs-item>
                <v-tabs-item name="3">Tab 3</v-tabs-item>
                <v-tabs-item name="disabled" disabled>disabled Tab</v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="1">Content one</v-tabs-pane>
                <v-tabs-pane name="2">Content two</v-tabs-pane>
                <v-tabs-pane name="3">Content three</v-tabs-pane>
            </v-tabs-body>
        </v-tabs>
      `
            }
        },
        components:{
            'v-tabs': Tabs,
            'v-tabs-head': TabsHead,
            'v-tabs-body': TabsBody,
            'v-tabs-item': TabsItem,
            'v-tabs-pane': TabsPane,
            'v-button':Button
        }
    }
</script>
