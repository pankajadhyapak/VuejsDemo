<!DOCTYPE html>
<html>
<head>
    <title>Binding Native Events to Components</title>
</head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<body>
<div class="container" style="margin-top: 50px" id="root">
  <modal :show="showModal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae repudiandae ratione, aliquam reiciendis totam excepturi, voluptates animi deleniti molestiae, perspiciatis eum necessitatibus dolorem porro ut rem. Accusamus totam cupiditate necessitatibus!
  </modal>

  <button @click="showModal = true" @onClose="onModalClose()">Show Modal</button>
</div>

    <script src="https://unpkg.com/vue@2.2.1/dist/vue.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>