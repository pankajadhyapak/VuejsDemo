<html>
    <head>
        <title>Vue js Talk</title>
    </head>
    <link rel="stylesheet" href="../libs/bootstrap.css">
    <body>
        <div class="container" style="margin-top: 30px" id="root">
            <h1>{{message}}</h1>
            <panel>
                <template slot="header"> My Cart </template>
                <h4>Product Detail</h4>
            </panel>

            <coupon></coupon>
        </div>
        <script src="../libs/vue.js"></script>
        <script src="demo4/app.js"></script>
    </body>
</html>