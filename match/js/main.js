$(document).ready(function() {

    /*$('.team').find('[data-id=4]').find('.playername')[0].innerHTML*/

    /*$('.playername').each(function () {

        $(this).on('change', function () {
            console.log("change found");
            var newLength = $(this).innerHTML.length;
            var charsPerLine = 10;
            var newEmSize = charsPerLine / newLength;
            // var textBaseSize = 16;
            var textBaseSize = 10;


            // Applying ems directly was causing some weirdness, converting ems to pixels got rid of the weirdyness
            if (newEmSize < 1) {
                // Scale it
                var newFontSize = newEmSize * textBaseSize;
                // alert(newFontSize);
                var formattedSize = "font-size:" + newFontSize + "px;";
            } else {
                // It fits, leave it alone
                var newFontSize = 1;
                var formattedSize = "font-size:" + textBaseSize + "px;";
            }

            $(this).attr('style', formattedSize);

        });

    });*/

}

/*

    $('.team.right [data-id=2] .champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/3/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg"></image>';

    $('.team.right [data-id=4] svg text.playername')

    $('.team').find('[data-id=4]').find('.champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/498/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg" style="padding-bottom: calc(100% * 3 / 4);"></image>'

    $('.champimg')[0].outerHTML = '<image preserveAspectRatio="xMidYMin slice" xlink:href="https://cdn.communitydragon.org/latest/champion/498/splash-art/centered/skin/0.jpg" x="38" y="28" width="350" height="130" transform="translate(0,0) rotate(0)" fill="#fff" stroke="#000" stroke-miterlimit="10" class="champimg" style="padding-bottom: calc(100% * 3 / 4);"></image>'

 */