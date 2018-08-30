<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'vue-wheel-tabs-head',
        inject: ['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected', (item, vm) =>{
               let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left-21}px`  //距左边多了21px 没找到原因
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line{
            position: absolute;
            bottom:0;
            border-bottom: 3px solid $blue;
            transition: left .3s, width .3s;
        }
        >.actions-wrapper{
            margin-left: auto;  //靠右
            display: flex;
            align-items: center;
            padding: 0 2em;
        }
    }
</style>
