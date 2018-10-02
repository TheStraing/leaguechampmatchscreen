var APIKEY = 'RGAPI-8177f7a6-a255-4f94-84d8-808957464f8f';

$(document).ready(function() {


    /*$('.playername').each(function () {
        $(this).textfill({
            maxFontPixels: 60
        });
    });*/

    $.ajax({

        url: "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/LaStringa?api_key="+APIKEY,
        type : 'GET',
        dataType:'json',
        success : function(data) {
            console.log(data);
            /*$('.playername span')[0].innerHTML = data.name;*/
            getCurrentMatchData(data.id);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });


    /*$('.team').find('[data-id=4]').find('.playername')[0].innerHTML*/

});


function getCurrentMatchData(summonerid) {

    $.ajax({

        url: "https://euw1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/"+summonerid+"?api_key="+APIKEY,
        type : 'GET',
        dataType:'json',
        success : function(data) {
            console.log(data);
            setDataIntoView(data);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });

}


function setDataIntoView(data) {



}


/*

    $('.team.right [data-id=2] .champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/3/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg"></image>';

    $('.team.right [data-id=4] svg text.playername')

    $('.team').find('[data-id=4]').find('.champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/498/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg" style="padding-bottom: calc(100% * 3 / 4);"></image>'

    $('.champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/498/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg" style="padding-bottom: calc(100% * 3 / 4);"></image>'

 */