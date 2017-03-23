Vue.component('panel', {
  template: `<div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title"><slot name="header"></slot></h3>
                </div>
                <div class="panel-body">
                  <slot></slot>
                </div>
            </div>`,
})
new Vue({
  el: '#root',
  data: {
    message:"Hello Vue Js"
  },
  methods: {}
})