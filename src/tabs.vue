<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import  Vue from 'vue'
    export default {
        name: 'vue-wheel-tabs',
        props:{
            selected:{
                type:String,
                required: true
            },
            direction:{
                type:String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
          return {
              eventBus: this.eventBus
          }
        },
        created(){
        },
        mounted(){
            this.$children.forEach((vm) => {
                if(vm.$options.name === 'vue-wheel-tabs-head'){
                    vm.$children.forEach((item) => {
                       if(item.$options.name === 'vue-wheel-tabs-item' && item.name === this.selected){
                           this.eventBus.$emit('update:selected', this.selected, item)
                       }
                    })
                }
            })
        }

    }
</script>
<style>
    .tabs{

    }
</style>
