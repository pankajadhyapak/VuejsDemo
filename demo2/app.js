Vue.component('panel', {
  template: `<div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title"><slot name="header"></slot> - {{count}}</h3>
                </div>
                <div class="panel-body">
                  <slot></slot>
                </div>
            </div>`,

  props:['count']
})
new Vue({
  el: '#root',
  data: {
    message:"Hello Vue Js",
    count:0
  },
  methods: {}
})