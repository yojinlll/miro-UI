# 笔记

    1. 实现一个轮子的基本步骤
        
        * 组件样式
        * 组件功能
        * 组件测试
    
    2. 简单总结
    
        * 除了要理清组件功能的逻辑，有大部分时间是花在了 css 上……
        * 还有一部分时间是花在了重构上
    

<br>

## Button
	
	1. vertical-align: middle
	2. display: inline-flex; oreder: 1/2, 利用 order 排列顺序

<br>

## Input

    1. v-if
    2. $emit/$on
    3. $event.target.value(v-model)
    
<br>

## Row & Col

    1. 使用 scss 的 插值语法 和 for 语法
    2. 响应式的设计(层级覆盖)
    3. 使用方法
	
        *  默认为 pc 样式，col 组件可以设置 span offset ，分为24等分，默认 span 与 offset 数值总和为 24
        *  row 组件上可以设置 gutter ，数值单位为 px 。
        *  当 row 组件 gutter 为 0 时，添加两个 col 组件且各自 span 值为 24 ，则默认分为两行；各自 span 设为 12 ，则各占一半。
        
<br>

## toast 
    1. 要考虑如何去使用这个toast，参考了ele，所以使用的是插件引入的方式去使用，在原型上添加生成 toast 组件的方法，通过调用这个方法
    在页面中添加 toast ;
    
    2. 动画方面
    
       * 根据 position props 选择 toast 出现位置，设置对应位置的css，这时transition 动画不起效，好像是css覆盖的原因，就不使用
       transition 实现动画，改为 keyframes
	       
<br>

## Tabs

    1. 通过修饰符，改动 props；
    2. 需要用到 eventHub，所以利用 provide/inject 将一个 Vue 实例作为可以接收事件触发和事件监听的对象。
 
<br>
 
## Popover

    1. Popover 组件的弹出不适合选择事件流的方式去实现，因为这样也会阻止了使用者在组件上绑定的点击事件，于是通过原生JS的添加监听器
    和移除监听器去实现，每点击一下便添加一个 * 点击文档就关闭 popover * 的监听器，同时关闭 popover 时将这个监听器给移除。
    
    2. 样式问题，生成的 popover 需要在触发元素的四周，所以需要获取 scrollX/scrollY 以及 触发元素的位置 来做位置判断。
    
    3. 还要考虑 popover 在页面的位置，ele 中 popover 是 body 中的最后一个元素，这样可以避免页面使用 overflow：hidden 时将其覆盖，
    所以通过 document.body.appendChild() 的方法将 popover 移到了 body 的最后一个元素上。
    
    4. 由于 position 这个 props 可以改变 popover 的方位，所以也需要根据方位不同去调整小三角的位置。

<br>

## Collapse

    1. 一开始是通过简单的 v-if 实现
    
    2. 但要考虑 更新props 和 初始展示选项 的话，就复杂起来了。其中使用到了单项数据流的方式去更新 props。
            子组件通过父组件上的 props 决定一开始展现哪一项
                点击子组件，执行关闭或展开该项时，通过触发 * 更新父组件 props * 的事件（:select.sync），由此再更新子组件
                
    3. 使用了 transition 标签去实现动画，不过动画的代码基本参考element的collapse动画组件。
   
<br>
    
## 测试
        
    1. 引入 chai
    2. 使用 chai 的断言 expect
    3. 通过 $mount 挂载实例，获取实例上需要测试的属性，将其与预期值做判断，符合预期则通过测试
    
        vm.$el.remove()	vm.$destory
    
    4. 配合 mocha 测试框架 （describe/it）
    5. 配合 karma 浏览器唤起（karma.conf.json 中配置好 mocha & sinon-chai）
    6. 自动化测试（测试失败）
    
        以上组成框架测试