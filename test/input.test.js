const expect = chai.expect;
import  Vue from 'vue'
import  Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', ()=> {
    it('存在.', ()=> {
        expect(Input).to.exist
    })

    describe('接收参数', () => {
        it('接收 value', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            })
            vm.$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('1234')
            vm.$destroy()
        })

        it('接收 disabled', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            })
            vm.$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
            vm.$destroy()
        })

        it('接收 readonly', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            })
            vm.$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
            vm.$destroy()
        })

      /*  it('接收 error', ()=> {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            console.log('-------------------------************')
            console.log(vm.$el)
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.icon-error-message')
            expect(errorMessage.innerText).to.equal('你错了')
        })*/
    })



})