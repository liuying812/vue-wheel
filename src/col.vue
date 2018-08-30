<template>
    <div class="col" :class="colClass"
         :style="colStyle">
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
        data() {//只在created之后读一次值
            return {
                gutter:0   //默认值是0，从row中传入
            }
        },
        computed:{//随着变量值的变化而变化
            colClass(){
              let {span , offset} = this
              return [
                  span && `col-${span}`,
                  offset && `offset-${offset}`
              ]
            },
            colStyle() {
              return {
                  paddingLeft: this.gutter / 2 + 'px',
                  paddingRight: this.gutter / 2 + 'px'
              }
             }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        height: 100px;
       /* background: grey;*/
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