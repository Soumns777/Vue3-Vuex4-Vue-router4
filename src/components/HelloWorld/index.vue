<template>
  <!-- Honey❤ 引入父组件的数据 msg -->
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <!-- Honey❤ 测试reactive -->
  <button style="background: #98f5ff;margin-right:20px;border: 0" @click="UpdateReactiveData">测试reactive -- {{ state.test }}</button>

  <!-- Honey❤ 测试更新ref   -->
  <button style="background:indianred;border: 0;margin-right: 20px" @click="UpdateRefData">测试ref数据 -- {{ foo }}</button>

  <!-- Honey❤  测试watch 监听单个数据源 -->
  <button style="background:orangered;border: 0;margin-right: 20px"  @click="addWatchOne">测试watch监听单个数据源 -- {{ watch1 }}</button>

  <!-- Honey❤  测试watch监听多个数据源 -->
  <button style="background:forestgreen;border: 0;margin-right: 20px"  @click="addWatchAll">测试watch监听多个数据源 -- {{ watch1 }}--{{ watch2 }}</button>

  <!-- Honey❤   测试computed计算户型 -->
  <button style="background:palevioletred;border: 0" @click="CompuClick">{{ foo }}-测试computed计算属性-{{ compu }}</button>


</template>

<script >
// FIXME 在执行setup时尚未创建组件实例,所以在setup选项中没有this(这意味着,除了props之外,你将无法访问组件中声明的任何属性--本地状态、计算属性或方法)
import { onMounted, onRenderTracked,defineProps,reactive , ref ,isReactive , isRef , provide , inject , watch,computed} from 'vue';

export  default  {
  name:'HelloWorld',

  // FIXME setup函数先于beforeCreate函数,所以此时是无法访问到 this  的
  // setup中可以写定义的数据、方法等
  setup(props,ctx) {
    console.log('setup')
    // props 存储着定义当前组件允许外界传递过来的参数名称以及对应的值
    //  ctx  是一个上下文对象,能从中访问到 attr、emit、slots
    console.log(props,ctx)

    defineProps({
      msg:Number
    });

// TODO 一、reactive  接收的参数必须是一个对象,在使用的时候就需要  {{ state.count }}
  const  state = reactive({count: 0, test: 777});

  console.log(isReactive (state)+'----测试是否 是reactive创建') // true


// TODO 二、ref ref本质上也是reactive,在给ref函数传递一个值之后,ref函数的底层会把ref转为reactive
    // FIXME ref(0) ---> reactive({value:0}) 底层原理
    const foo = ref(9)
    console.log(isRef(foo) +'--测试是否是 ref创建')
    // FIXME ref创建的对象,在改变值的时候需要使用 foo.value 来改变; 在 HTML中则可以  {{ foo }}直接显示
    foo.value ++;

  // Soumns 关于 ref 和 reactive 的使用说明
  // 1.基本类型值(String、Number、Boolean等)或单值对象(类似像{count:3}这样只有一个属性值的对象),使用ref
  // 2.引用类型值( Object、Array)使用reactive


// TODO 三、toRef 将某个对象中的某个值转化为响应式数据,第一个参数为obj对象,第二个参数为对象中的属性名(会改变原数据,但是视图中的数据不发生变化,用起来不方便)
    // FIXME ref复制原始数据,改变响应式数据不会影响原始数据; toRef引用原始数据,改变响应式数据会改变原始数据
    // 响应式数据和原始数据关联,且更新响应式数据后不希望更新界面的情况下使用 toRef


// TODO 四、不用methods,可以用如下的导出的方式使用事件
//  动态更新reactive创建的数据
    const UpdateReactiveData = () => {
      state.test += 7
    };
//  动态更新ref创建的数据
    const UpdateRefData = () => {
      foo.value  +=  6
    };

 //  TODO 伍、provide和inject
 //   provide:向子组件以及子孙组件传递数据,接收两个参数，第一个参数是 key(数据的名称),第二个参数为value(数据的值)
    provide('info', foo)
 //   inject :接收父组件或祖先组件传递过来的数据,接收一个参数key,即父组件或者祖先组件传递的数据名称
    inject('info')


 // TODO 六、watch (watch方法会返回一个stop方法,若想要停止监听,便可直接执行该stop函数)
 //   watch和watchEffect区别:1.不会立即执行,当侦听的源变更时才会执行;2.可以监听多个数据源
 //   相同点:watch和watchEffect在停止监听,清除副作用(相应地onlnvalidate会作为回调的第三个参数传入),副作用和刷新时机和侦听器调试等方面行为一致
    const  watch1 = ref(9)

    const addWatchOne = () => {
      watch1.value++
  }
  // FIXME 监听单个数据源
  watch(watch1,(newValue,oldValue) => {
    //newValue为改变后数据  oldValue为改变前数据
    console.log(newValue,oldValue)
    // console.log(`%c ${newValue},${oldValue}`,  'color:#00CED1')
  })

  // FIXME 监听多个数据
    const watch2 = ref(8)
    const addWatchAll = () => {
      watch1.value++
      watch2.value++
      return
    }
    watch([watch1,watch2],([newValue,newValue2],[oldValue,oldValue2]) => {
      console.log('newValue--'+newValue)
      console.log('newValue2--'+newValue2)
      console.log('oldValue--'+oldValue)
      console.log('oldValue2--'+oldValue2)
    })



   // TODO 八、computed 计算属性
    const  compu = computed( ()=> {
       return foo.value *2
    } )

    const CompuClick = () => {
      return foo.value++
    }







    // Soumns 一般在初始化页面完成后,再对dom节点进行相关操作
    onMounted( ()=> {
       console.log(`%c onMounted`,  'color:#00CED1')
    } ),

    // Soumns 调试的钩子  onRenderTracked、onRenderTriggered
    onRenderTracked( ()=> {
      // debugger
       // 检查哪个依赖项导致组件重新呈现
    } )





    // FIXME 最后需要return setup中定义的方法和数据
    return {foo,state,watch1,watch2,compu,UpdateReactiveData,UpdateRefData,addWatchOne,addWatchAll,CompuClick }

  },



}



</script>

<style scoped lang="scss" >
a {
  color: #42b983;
}


</style>


