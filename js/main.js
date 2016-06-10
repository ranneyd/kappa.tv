"use strict";
{
    const HANDLE_WIDTH = "10px";

    let side = "right";
    let border = 20;

    let isVert = () => {
        return side === "right" || side === "left";
    }


    // Stream
    {
        $("#stream").css({
            width: isVert() ? `${100-border}%` : "100%",
            height: isVert() ? "100%" : `${100-border}%`,
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
    // Chat Border
    {
        $("#chat-border").css({
            width: isVert() ? HANDLE_WIDTH : "100%",
            height: isVert() ? "100%" : HANDLE_WIDTH
        });
        $("#chat-border").css(side, `${border}%`);
    }
}