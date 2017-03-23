<html>
    <head>
        <title>Vue js Talk</title>
    </head>
    <link rel="stylesheet" href="../libs/bootstrap.css">
    <body>
        <div class="container" style="margin-top: 30px" id="root">
            
            
            <div id="counter-event-example">
              <h2>{{ total }}</h2>
              <button-counter v-on:increment="incrementTotal"></button-counter>
              <button-counter v-on:increment="incrementTotal"></button-counter>
            </div>
        </div>
        <script src="../libs/vue.js"></script>
        <script src="demo3/app.js"></script>
    </body>
</html>