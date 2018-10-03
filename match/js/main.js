var APIKEY = 'RGAPI-8177f7a6-a255-4f94-84d8-808957464f8f';

$(document).ready(function() {


    /*$('.playername').each(function () {
        $(this).textfill({
            maxFontPixels: 60
        });
    });*/

    /*$('.team').find('[data-id=4]').find('.playername')[0].innerHTML*/
    getCurrentMatchData('Kaymax','Team1','Team2');

});


function getCurrentMatchData(summonername,team1,team2) {

    $.ajax({

        url: "http://ddragon.leagueoflegends.com/cdn/8.19.1/data/en_US/summoner.json",
        type : 'GET',
        dataType:'json',
        success : function(spells) {

            $.ajax({

                url: "https://ddragon.leagueoflegends.com/cdn/8.19.1/data/it_IT/runesReforged.json",
                type : 'GET',
                dataType:'json',
                success : function(runes) {

                        $.ajax({

                            url: "http://localhost/riot/getData.php",
                            type : 'GET',
                            dataType:'json',
                            data: {
                                summoner: summonername
                            },
                            success : function(data) {
                                json = data;
                                setDataIntoView(summonername,data,team1,team2,runes,spells);
                            },
                            error : function(request,error)
                            {
                                alert("Request: "+JSON.stringify(request));
                            }
                        });

                },
                error : function(request,error)
                {
                    alert("Request: "+JSON.stringify(request));
                }
            });
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });


}


function setDataIntoView(summonername,data,team1,team2,runes,spells) {

    var playerTeam = 0;

    console.log(data);
    console.log(data.participants);

    for(playerid in data.participants){
        var player = data.participants[playerid];
        if(player.summonerName === summonername){
            playerTeam = player.teamId;
            console.log("Squadra evocatore "+summonername+" "+playerTeam);
            break;
        }
    }

    if(playerTeam === 100){
        $('.teamname.left p').text(team1);
        $('.teamname.right p').text(team2);
    }else{
        $('.teamname.left p').text(team2);
        $('.teamname.right p').text(team1);
    }


    var leftid = 1;
    var rightid = 1;

    for(playerid in data.participants){
        var player = data.participants[playerid];
        console.log(player.teamId)
        if(player.teamId === 100){

            var currentPlayer = $('.team.left .player[data-id='+leftid+']');

            currentPlayer.find('.playername span').text(player.summonerName);

            currentPlayer.find('.champimgbox').css('background-image','url("https://cdn.communitydragon.org/latest/champion/'+player.championId+'/splash-art/centered/skin/0.jpg")');

            var index = 1;
            var primary = player.perks.perkStyle;
            var secondary = player.perks.perkSubStyle;
            for(styleindex in runes){
                if(runes[styleindex].id === primary){

                    var key = runes[styleindex].key;


                    for(perkIdIndex in player.perks.perkIds){
                        var perkid = player.perks.perkIds[perkIdIndex];

                        for(slotid in runes[styleindex].slots){

                            var slot = runes[styleindex].slots[slotid];
                            //console.log(slot);

                            for(perkJIndex in slot.runes){
                                //console.log(perkid+" "+slotid+" ")
                                //console.log(perkIdIndex);
                                var p = slot.runes[perkJIndex];
                                if(p.id === perkid){

                                    console.log(player.summonerName+" "+key+" "+p.icon.toLowerCase()+ " "+index);
                                    //console.log( currentPlayer.find('.smallbox')[index]);
                                    currentPlayer.find('.smallbox[data-id='+index+']').css('background-image','url("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/'+p.icon.toLowerCase()+'")');
                                    index++;
                                    break;
                                }

                            }

                        }

                    }
                    //https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/cheapshot/cheapshot.png

                    break;
                }
            }

            for(styleindex in runes){
                if(runes[styleindex].id === secondary){

                    var key = runes[styleindex].key;


                    for(perkIdIndex in player.perks.perkIds){
                        var perkid = player.perks.perkIds[perkIdIndex];

                        for(slotid in runes[styleindex].slots){

                            var slot = runes[styleindex].slots[slotid];
                            //console.log(slot);

                            for(perkJIndex in slot.runes){
                                //console.log(perkid+" "+slotid+" ")
                                //console.log(perkIdIndex);
                                var p = slot.runes[perkJIndex];
                                if(p.id === perkid){

                                    console.log(player.summonerName+" "+key+" "+p.icon.toLowerCase()+ " "+index);
                                    //console.log( currentPlayer.find('.smallbox')[index]);
                                    currentPlayer.find('.smallbox[data-id='+index+']').css('background-image','url("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/'+p.icon.toLowerCase()+'")');
                                    index++;
                                    break;
                                }

                            }

                        }

                    }
                    //https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/cheapshot/cheapshot.png

                    break;
                }
            }

            for(spellindex in spells.data){
                //console.log(spells.data[spellindex]);
                var spell = spells.data[spellindex];
                if(player.spell1Id == spell.key){
                    console.log(spell.key);
                    currentPlayer.find('.smallboxcolumn[data-id=1]').css('background-image','url("http://ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/'+spell.image.full+'")');
                    index++;
                    break;
                }

                //break;
            }

            for(spellindex in spells.data){
                //console.log(spells.data[spellindex]);
                var spell = spells.data[spellindex];
                if(player.spell2Id == spell.key){
                    console.log(spell.key);
                    currentPlayer.find('.smallboxcolumn[data-id=2]').css('background-image','url("http://ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/'+spell.image.full+'")');
                    index++;
                    break;
                }

                //break;
            }

            leftid++;

        }else {

            var currentPlayer = $('.team.right .player[data-id='+rightid+']');

            currentPlayer.find('.playernameright span').text(player.summonerName);

            currentPlayer.find('.champimgbox').css('background-image','url("https://cdn.communitydragon.org/latest/champion/'+player.championId+'/splash-art/centered/skin/0.jpg")');

            //$('.team.right .player[data-id=1]').find('.smallbox');
            var index = 1;
            var primary = player.perks.perkStyle;
            var secondary = player.perks.perkSubStyle;
            for(styleindex in runes){
                if(runes[styleindex].id === primary){

                    var key = runes[styleindex].key;


                    for(perkIdIndex in player.perks.perkIds){
                        var perkid = player.perks.perkIds[perkIdIndex];

                        for(slotid in runes[styleindex].slots){

                            var slot = runes[styleindex].slots[slotid];
                            //console.log(slot);

                            for(perkJIndex in slot.runes){
                                //console.log(perkid+" "+slotid+" ")
                                //console.log(perkIdIndex);
                                var p = slot.runes[perkJIndex];
                                if(p.id === perkid){

                                    console.log(player.summonerName+" "+key+" "+p.icon.toLowerCase()+ " "+index);
                                    //console.log( currentPlayer.find('.smallbox')[index]);
                                    currentPlayer.find('.smallbox[data-id='+index+']').css('background-image','url("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/'+p.icon.toLowerCase()+'")');
                                    index++;
                                    break;
                                }

                            }

                        }

                    }
                    //https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/cheapshot/cheapshot.png

                    break;
                }
            }

            for(styleindex in runes){
                if(runes[styleindex].id === secondary){

                    var key = runes[styleindex].key;


                    for(perkIdIndex in player.perks.perkIds){
                        var perkid = player.perks.perkIds[perkIdIndex];

                        for(slotid in runes[styleindex].slots){

                            var slot = runes[styleindex].slots[slotid];
                            //console.log(slot);

                            for(perkJIndex in slot.runes){
                                //console.log(perkid+" "+slotid+" ")
                                //console.log(perkIdIndex);
                                var p = slot.runes[perkJIndex];
                                if(p.id === perkid){

                                    console.log(player.summonerName+" "+key+" "+p.icon.toLowerCase()+ " "+index);
                                    //console.log( currentPlayer.find('.smallbox')[index]);
                                    currentPlayer.find('.smallbox[data-id='+index+']').css('background-image','url("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/'+p.icon.toLowerCase()+'")');
                                    index++;
                                    break;
                                }

                            }

                        }

                    }
                    //https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/cheapshot/cheapshot.png

                    break;
                }
            }

            for(spellindex in spells.data){
                //console.log(spells.data[spellindex]);
                var spell = spells.data[spellindex];
                if(player.spell1Id == spell.key){
                    console.log(spell.key);
                    currentPlayer.find('.smallboxcolumn[data-id=1]').css('background-image','url("http://ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/'+spell.image.full+'")');
                    index++;
                    break;
                }

                //break;
            }

            for(spellindex in spells.data){
                //console.log(spells.data[spellindex]);
                var spell = spells.data[spellindex];
                if(player.spell2Id == spell.key){
                    console.log(spell.key);
                    currentPlayer.find('.smallboxcolumn[data-id=2]').css('background-image','url("http://ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/'+spell.image.full+'")');
                    index++;
                    break;
                }

                //break;
            }

            rightid++;

        }
    }

    $('.playername').each(function () {
        $(this).textfill({
            maxFontPixels: 55
        });
    });

    $('.playernameright').each(function () {
        $(this).textfill({
            maxFontPixels: 55
        });
    });

}


/*

    $('.team.right [data-id=2] .champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/3/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg"></image>';

    $('.team.right [data-id=4] svg text.playername')

    $('.team').find('[data-id=4]').find('.champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/498/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg" style="padding-bottom: calc(100% * 3 / 4);"></image>'

    $('.champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/498/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg" style="padding-bottom: calc(100% * 3 / 4);"></image>'

 */