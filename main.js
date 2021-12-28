document.addEventListener("keydown", function(e) {
    if (e.code === "KeyA") {
        let audioA = document.createElement("AUDIO");
        audioA.src="A.mp3";
        audioA.play();
    } else if (e.code === "KeyS") {
        let audioS = document.createElement("AUDIO");
        audioS.src="S.mp3";
        audioS.play();
    } else if (e.code === "KeyD") {
        let audioD = document.createElement("AUDIO");
        audioD.src="D.mp3";
        audioD.play();
    } else if (e.code === "KeyF") {
        let audioF = document.createElement("AUDIO");
        audioF.src="F.mp3";
        audioF.play();
    } else if (e.code === "KeyG") {
        let audioG = document.createElement("AUDIO");
        audioG.src="G.mp3";
        audioG.play();
    } else if (e.code === "KeyH") {
        let audioH = document.createElement("AUDIO");
        audioH.src="H.mp3";
        audioH.play();
    } else if (e.code === "KeyJ") {
        let audioJ = document.createElement("AUDIO");
        audioJ.src="J.mp3";
        audioJ.play();
    } else if (e.code === "KeyW") {
        let audioW = document.createElement("AUDIO");
        audioW.src="W.mp3";
        audioW.play();
    } else if (e.code === "KeyE") {
        let audioE = document.createElement("AUDIO");
        audioE.src="E.mp3";
        audioE.play();
    } else if (e.code === "KeyT") {
        let audioT = document.createElement("AUDIO");
        audioT.src="T.mp3";
        audioT.play();
    } else if (e.code === "KeyY") {
        let audioY = document.createElement("AUDIO");
        audioY.src="Y.mp3";
        audioY.play();
    } else if (e.code === "KeyU") {
        let audioU = document.createElement("AUDIO");
        audioU.src="U.mp3";
        audioU.play();
    } else {
        console.log("Warning!");
    }
});