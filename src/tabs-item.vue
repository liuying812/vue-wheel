<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'vue-wheel-tabs-item',
        inject: ['eventBus'],
        props:{ //需要用户（前端开发者）传值
            disabled:{
                type:Boolean,
                default:false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        data(){//不需要用户传值，自身维护
            return {
                active: false
            }
        },
        created(){
            this.eventBus.$on('update:selected', (name)=> {
                this.active = name === this.name;
            })
        },
        computed: {
            classes(){
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        methods:{
            onClick() {
                if(this.disabled) { return }
                this.eventBus.$emit('update:selected',this.name, this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: #ddd;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        align-items: center;
        display: flex;
        &.active {
            color: $blue;
            font-weight: bold;
         }
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>
