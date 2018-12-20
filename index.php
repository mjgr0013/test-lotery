<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="sticky-footer.css" rel="stylesheet">

    <title>Hello, world!</title>
</head>
<body>

    <style>
        td {
            vertical-align: middle !important;
        }
    </style>

    <!-- Begin page content -->
    <main role="main" class="container">
        <div class="row">
            <h3>Añadir número</h3>
            <form class="form-inline">
                <input type="text" class="form-control mb-2 mr-sm-2" id="number" placeholder="Número">

                <input type="text" class="form-control mb-2 mr-sm-2" id="who" placeholder="Quién">

                <button type="button" class="nes-btn is-primary mb-2" onclick="buttonAddNumber()">Añadir</button>
            </form>
        </div>

        <hr>

        <div class="row">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col" style="width: 10%"></th>
                    <th scope="col" style="width: 20%">Numero</th>
                    <th scope="col" style="width: 20%">Quien</th>
                    <th scope="col" style="width: 50%">Resultado</th>
                </tr>
                </thead>
                <tbody id="js-numbers-table">
                </tbody>
            </table>
        </div>
    </main>






    <footer class="footer">
        <div class="container">
            <button id="button_status" class="nes-btn" data-status="0">Comenzar</button>
        </div>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!--<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"-->
            <!--integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"-->
            <!--crossorigin="anonymous"></script>-->
    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pouchdb/7.0.0/pouchdb.js"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <script src="app.js"></script>

    <script>
        (function() {
            getAllNumbers();
        })();
    </script>
</body>
</html>