import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('v-button', Button)
Vue.component('v-icon', Icon)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)
Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-pane', TabsPane)

new Vue({
    el:'#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
        selectedTab: 'sports'
    },
    methods:{
        inputChange (e){
            console.log(e);
        }
    }
})




