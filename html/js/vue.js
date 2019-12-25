window.onload = function(){
    this.alert('Hello World!');
};
new Vue({
    el: 'contact',
    data: {
        colors:[
            {bg_color : "white"},
            {bg_color : "black"}
        ]
    },
    methods:{
        setBlackColor : function(obj, color){
            obj['bg_color']=background-color;
        }
    }
})
