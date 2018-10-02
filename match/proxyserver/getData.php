<?php
/**
 * Created by PhpStorm.
 * User: giuse
 * Date: 02/10/2018
 * Time: 22:50
 */

include('lib/php-riot-api.php');
include('lib/FileSystemCache.php');

if(!isset($_GET['summoner'])){
    return;
}

 $api = new riotapi('euw1', new FileSystemCache('cache/'));

try {
    $r = $api->getSummonerByName($_GET['summoner']);
    /*echo $r['id'];*/
    $r2 = $api->getCurrentGame($r['id']);
    $json = json_encode($r2);
    echo $json;
} catch(Exception $e) {
    echo "Error: " . $e->getMessage();
};