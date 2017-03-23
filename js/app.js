window.Event = new Vue();

Vue.component('modal', {

  template: `<div>
<div v-if="show" class="modal fade in" tabindex="-1" role="dialog" style="display: block; padding-left: 0px;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button @click="close()" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button @click="close()" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

  </div>`,

  props:['show'],
  data: function () {
    return {
      counter: 0
    }
  },
  methods:{
    close(){
      window.Event.$emit('onClose');
    }
  }
})
new Vue({
  el: '#root',
  data: {
    showModal:false
  },
  created(){
      window.Event.$on('onClose', this.onModalClose);
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    },
    onModalClose(){
      this.showModal = false;
    }
  }
})