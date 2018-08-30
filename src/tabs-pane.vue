<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'vue-wheel-tabs-pane',
        inject: ['eventBus'],
        props:{
            name: {
                type: String | Number,
                required: true
            }
        },
        data(){
            return {
                active: false
            }
        },
        created: function () {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        computed: {
            classes(){
                return {
                    active: this.active
                }
            }
        },
        methods:{
            xxx() {
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-pane{
        &.active {
            background: red;
        }
    }
</style>
