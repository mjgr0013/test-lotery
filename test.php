<?php
//    header("Access-Control-Allow-Origin: *");
    require 'vendor/autoload.php';

    $number = $_GET['number'];

    $client = new \GuzzleHttp\Client();

    $res = $client->request(
        'GET',
        'https://api.elpais.com/ws/LoteriaNavidadPremiados?n=' . $number
    );

    echo $res->getBody()->getContents();