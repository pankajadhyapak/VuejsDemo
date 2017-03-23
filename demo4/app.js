window.Event = new Vue();

Vue.component('coupon', {
  template: `<input @blur="applied()" v-model="cvalue" class="form-control" placeholder="Apply ">`,
  data(){
    return {
      cvalue: ""
    }
  },
  methods:{
    applied(){
      //do the validation and api to get the dicount value
      if(this.cvalue != ""){
          //emit the event 
          window.Event.$emit('coupon-applied', {discount:10, cname: this.cvalue});
      }else{
        //emit the event 
        window.Event.$emit('coupon-removed');
      }
    }
  }
})

Vue.component('panel', {
  template: `<div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title"><slot name="header"></slot></h3>
                </div>
                <div class="panel-body">
                  <slot></slot>
                  <p class="alert alert-success" v-if="coupon">
                    You applied {{ coupon }} coupon
                  </p>
                  <p>Total Price : {{finalPrice}}</p>
                </div>
            </div>`,
  data(){
    return {
      total: 200,
      discount:0,
      coupon:null
    }
  },
  computed:{
    finalPrice(){
      if(this.discount > 0){
        return this.total-this.discount;
      }else{
        return this.total;
      }
    }
  },
  created(){
    var vm = this;
    //Listen for coupon applied event 
    window.Event.$on('coupon-applied', function(data){
        vm.coupon = data.cname;
        vm.discount = data.discount;
    });

    //Listen for coupon removed event
    window.Event.$on('coupon-removed', function(data){
        vm.coupon = null;
        vm.discount = 0;
    });
  }
})

new Vue({
  el: '#root',
  data: {
    message:"Hello Vue Js"
  }
})