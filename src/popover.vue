<template>
    <div class="popover" @click.stop="onClick">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible" >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export  default {
        name: 'vue-wheel-popover',
        data() {
            return {visible: false}
        },
        mounted(){
            console.log(this.$refs.triggerWrapper);
        },
        methods: {
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.screenX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            listenToDocument(){
                let eventHandler = (e) => {
                    if (!this.$refs.contentWrapper.contains(e.target)) {
                        this.visible = false
                        document.removeEventListener('click', eventHandler)
                    }
                }
                document.addEventListener('click',eventHandler)
            },
            onClick(event){
                if(this.$refs.triggerWrapper.contains(event.target)){
                    this.visible  = !this.visible
                    if(this.visible === true){
                        this.$nextTick(() => {
                            this.positionContent()
                            this.listenToDocument()
                        })
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position:relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        box-shadow:  0 0 3px rgba(0,0,0,0.5);
        transform : translateY(-100%);  //为了展示在上方
    }
</style>