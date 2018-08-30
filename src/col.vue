<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
        <div style="border:1px solid green; height:100px;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "vue-wheel-col",
        props:{
            span: Number,
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter:0   //默认值是0，从row中传入
            }
        },
        created() {
            console.log('col created')
        },
        mounted(){
            console.log('col mounted')
        }

    }
</script>
<style lang="scss" scoped>
    .col{
        height: 100px;
        background: grey;
        width:50%;
       /* border: 1px solid red;*/

        $class: col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width: ($n / 24) * 100%;
            }
        }

        $class: offset-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }

    }
</style>