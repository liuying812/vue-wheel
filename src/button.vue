<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}">
        <v-icon v-if="icon" :name="icon"></v-icon>
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
    .v-button { font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
        border: 1px solid var(--border-color);border-radius: var(--border-radius);background: var(--button-bg);
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: top;
        &:hover { border-color: var(--border-color-hover);}
        &:active { background-color: var(--button-active-bg);}
        &:focus { outline: none;}
        >.content{ order:2; }
        >.icon{ order:1; margin-left:0; margin-right: .4em}
        &.icon-right{
            > .content{ order:1;}
            > .icon{ order: 2; margin-left: .4em; margin-right: 0}
        }
    }
</style>