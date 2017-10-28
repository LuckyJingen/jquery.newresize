## jquery.newresize ##
封装了一个为了解决jQuery的resize()事件在浏览器窗口大小改变时多次执行带来浏览器卡顿假死现象的扩展插件，大家拿去用用啊！
#### 由于最近都在用vue做项目，那么这个demo就也用vue来做了 ##

**|首先安装vue工程**  

 1. 简单回忆下安装过程      
 2. 保证node环境        
 3. npm install vue
 4. vue init webpack my-project
 5. cd my-project     
 6. npm install       
 7. npm run dev

**||然后把文件jquery.newresize.js引入项目中**

 1. 文件存放路径：src/assets/js/jquery.newresize.js

 2. 此方法是封装成一个jquery的对象，所以使用时依赖于jquery

 3. 首先安装jquery
 4. npm install jquery --save-dev  

    创建一个jquery-shim文件名，以下为文件内容，将jquery的$进行处理，最终解决全局调用的问题
 5. import $ from 'jquery'  

    window.$=window.jQuery=$;
 6. 在main.js文件中引入文件  

    import './assets/js/jquery-shim'  
    
    import './assets/js/jquery.newresize.js'
 7. 准备工作完毕，我们就可以在demo文件中去测试使用啦
    
 8. **调用方法**  

    **$(window).newresize(this.autoResize,200)**  
    
    **说一下，对象 . newresize(同学要做进行的操作，操作时间间隔)**
  
 9. 直接看代码，来个直观的调用

```
<script>
export default {
  name: 'HelloResize',
  data () {
    return {
      msg: 'Welcome to Use jQuery.newresize.js',
      width:'',
      height:''
    }
  },
  methods:{
    autoResize(){
      this.width= $(window).width();
      this.height= $(window).height();
    } 

  },
  mounted(){
    this.autoResize();
    $(window).newresize(this.autoResize,200);
    //参数说明(resize方法，resize一次的时间)
  },
  destroyed(){
    $(window).unbind('resize');
    //离开组件或者不需要执行resize时间时销毁事件
  }
}
</script>
```

 - 注意，这个resize事件如果添加到window中，还是需要适当的时候去销毁一下的，效率效率啊！！！
 - 好啦 其实很简单的一个小操作，巴拉巴拉说一堆，我都嫌弃自己麻烦啦，有需要用的同学可以研究一下有没有更好的方案，记得告诉我哦
- demo地址：http://wowgoo.cn/jquery.newresize/#/

     


