<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <v-icon name="error" class="icon-error"></v-icon>
            <span class="icon-error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'

    export  default {
        component: {Icon},
        name: 'vue-wheel-input' , //作用一，方便vue开发者工具调试
        props: {
            value:{
                type: String
            },
            disabled:{
                type: Boolean ,
                default: false
            },
            readonly: {
                type:Boolean,
                default: false
            },
            error: {
                type: String
            }

        }
    }
</script>
<style lang="scss" scoped>
    /*声明变量*/
    $height: 32px;
    $border-color: #999;
    $border-color-hover:#666;
    $border-radius: 4px;
    $font-size:12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F1453D;
    .wrapper{
        font-size: $font-size;
        display: inline-block;
        >input{
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;

            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                outline:none;
                box-shadow: inset 0 1px 3px $box-shadow-color
            }
            &[disabled]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error{
            >input{
            border-color: $red;
            }
            >input:focus{
                outline:none;
                box-shadow: inset 0 1px 3px $red
            }
        }
        .icon-error{
            fill:$red;
        }
        .icon-error-message{
            color: $red;
        }
    }

</style>