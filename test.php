<?php
//    header("Access-Control-Allow-Origin: *");
    require 'vendor/autoload.php';

    $number = $_GET['number'];

//    str_pad($number, 6, "0", STR_PAD_LEFT);

    $client = new \GuzzleHttp\Client();

    $res = $client->request(
        'GET',
        'https://api.elpais.com/ws/LoteriaNavidadPremiados?n=' . intval($number)
    );

    echo $res->getBody()->getContents();