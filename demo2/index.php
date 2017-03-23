<html>
    <head>
        <title>Vue js Talk</title>
    </head>
    <link rel="stylesheet" href="../libs/bootstrap.css">
    <body>
        <div class="container" style="margin-top: 30px" id="root">
            <h1>{{message}}</h1>
            <panel :count="count">
                <template slot="header"> My Heading </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolorum dolorem maxime beatae obcaecati expedita, tempore hic quia facilis debitis nemo ipsam labore cum est assumenda tenetur provident ratione at.
            </panel>

            <button class="btn btn-primary" @click="count =count+1">+1</button>
        </div>
        <script src="../libs/vue.js"></script>
        <script src="demo2/app.js"></script>
    </body>
</html>