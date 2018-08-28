<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <v-icon class="icon" v-if="icon && !loading" :name="icon"></v-icon>
        <v-icon class="loading icon" v-if="loading" name="loading"></v-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
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
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .v-button { font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
        border: 1px solid var(--border-color);border-radius: var(--border-radius);background: var(--button-bg);
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: top;
        &:hover { border-color: var(--border-color-hover);}
        &:active { background-color: var(--button-active-bg);}
        &:focus { outline: none;}
        >.content{ order:2; }
        >.icon{ order:1;  margin-right: .4em}
        &.icon-right{
            > .content{ order:1;}
            > .icon{ order: 2; margin-left: .4em; margin-right: 0}
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>