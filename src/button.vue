<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <v-icon class="icon" v-if="icon && !loading" :name="icon"></v-icon>
        <v-icon class="loading icon" v-if="loading" name="loading"></v-icon>
        <div class="v-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'vue-wheel-button',
        components: {
            'v-icon': Icon
        },
      //  props: ['icon', 'icon-position']
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String ,
                default: 'left',
                validator: function (value) {
                   // return !(value !== 'left' && value !== 'right');
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $button-height:32px;
    $button-bg: white;
    $button-active-bg:#eee;
    $border-radius: 4px;
    $color:#333;
    $border-color: #999;
    $border-color-hover:#666;
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .v-button { font-size: $font-size;height: $button-height;padding: 0 1em;
        border: 1px solid $border-color;border-radius: $border-radius;background: $button-bg;
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: top;
        &:hover { border-color: $border-color-hover;}
        &:active { background-color: $button-active-bg;}
        &:focus { outline: none;}
        >.v-button-content{ order:2; }
        >.icon{ order:1;  margin-right: .4em}
        &.icon-right{
            > .v-button-content{ order:1;}
            > .icon{ order: 2; margin-left: .4em; margin-right: 0}
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>