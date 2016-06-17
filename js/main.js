"use strict";
{
    const HANDLE_WIDTH = 10;
    const HALF_HANDLE_WIDTH = HANDLE_WIDTH / 2;

    let side = "right";
    let border = 20;
    let xOffset = 0;
    let yOffset = 0;

    let isVert = () => {
        return side === "right" || side === "left";
    };

    let setLayout = () => {
        // Stream
        {
            $("#stream").css({
                width: isVert() ? `${100-border}%` : "100%",
                height: isVert() ? "100%" : `${100-border}%`
            });
            if(isVert()){
                $("#stream").css("top", "0px");
                if(side === "right") {
                    $("#stream").css("left", "0px");
                }
                else{
                    $("#stream").css("right", "0px");
                }
            }
            else{
                $("#stream").css("left", "0px");
                if(side === "bottom") {
                    $("#stream").css("top", "0px");
                }
                else{
                    $("#stream").css("bottom", "0px");
                }
            }
        }
        // Chat
        {
            $("#chat").css({
                width: isVert() ? `${border}%` : "100%",
                height: isVert() ? "100%" : `${border}%`
            });
            if(isVert()){
                $("#chat").css("top", "0px");
                if(side === "right") {
                    $("#chat").css("right", "0px");
                }
                else{
                    $("#chat").css("left", "0px");
                }
            }
            else{
                $("#chat").css("left", "0px");
                if(side === "bottom") {
                    $("#chat").css("bottom", "0px");
                }
                else{
                    $("#chat").css("top", "0px");
                }
            }
        }
        // Chat Border
        {
            $("#chat-border").css({
                width: isVert() ? `${HANDLE_WIDTH}px` : "100%",
                height: isVert() ? "100%" : `${HANDLE_WIDTH}px`,
                cursor: isVert() ? "w-resize" : "n-resize"
            });
            let borderPos = 100*(border / 100 * $("body").width() - HALF_HANDLE_WIDTH) / $("body").width();
            $("#chat-border").css(side, `${borderPos}%`);
        }
    }

    // Event Handlers
    {
        let track = function(e) {
            switch(side){
                case "left":
                    border = 100*(e.pageX-xOffset + HANDLE_WIDTH / 2) / $(this).width();
                    break;
                default:
                    border = 100 - 100*(e.pageX-xOffset + HANDLE_WIDTH / 2) / $(this).width();
            }
            setLayout();
        }
        $("#chat-border").mousedown(function(e){
            $("#iframe-cover").show();

            xOffset = e.offsetX;
            yOffset = e.offsetY;
            $("body").mousemove(track);
        });
        $("body").mouseup(function(){
            $("#iframe-cover").hide();
            $("body").unbind("mousemove", track);
        });
    }

    setLayout();

    // let devMode = () => {
    //     $("#stream").css('background-color', 'red');
    //     $("#chat").css('background-color', 'cyan');
    //     $("#chat-border").css('background-color', 'green');
    //     $("#iframe-cover").css('background-color', 'magenta');
    // };

    //devMode();

    // Get stream data
    {
        $("#stream").attr("src", "http://player.twitch.tv/?channel=nl_kripp");
        $("#chat").attr("src", "http://www.twitch.tv/nl_kripp/chat");
    }
}