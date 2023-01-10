

import OpeningCanvas from "/ui/intro/opening.js";
import IntroCanvas from "/ui/intro/intro-canvas.js";
import HowtoCanvas from "/ui/intro/howto-canvas.js";
import DevCanvas from "/ui/intro/dev-canvas.js";
import OptionCanvas from "/ui/intro/option-canvas.js";

import LevelUpCanvas from "/ui/level-change/levelup-canvas.js";
import GameOverCanvas from "/ui/level-change/gameover-canvas.js";
import CompleteCanvas from "/ui/level-change/complete-canvas.js";

import GameCanvas from "/ui/game-canvas.js";

window.onload = function () {

    const openingCanvas = new OpeningCanvas();
    const gameCanvas = new GameCanvas();
    const introCanvas = new IntroCanvas();
    const howtoCanvas = new HowtoCanvas();
    const devCanvas = new DevCanvas();
    const optionCanvas = new OptionCanvas();
    const levelUpCanvas = new LevelUpCanvas();
    const gameOverCanvas = new GameOverCanvas();
    const completeCanvas = new CompleteCanvas();

    //배경음
    optionCanvas.onVolumeClick = function (volume) {
        openingCanvas.setIntroVolume(volume);
        introCanvas.setMainVolume(volume);

    }
    //효과음
    optionCanvas.onEffVolumeClick = function (volume) {
        gameCanvas.setEffVolume(volume);
    }

    openingCanvas.onclickIntro = function () {
        openingCanvas.obj.style.display = "none";
        introCanvas.obj.style.display = "inline-block";
        introCanvas.run();
    }

    introCanvas.onclickStart = function () {
        introCanvas.obj.style.display = "none";
        openingCanvas.pause();
        introCanvas.pause();

        gameCanvas.obj.style.display = "inline-block";
        gameCanvas.obj.focus();
        gameCanvas.init();
        gameCanvas.isRunning = true;
        gameCanvas.run();
    }


    introCanvas.onclickHowto = function () {
        introCanvas.obj.style.display = "none";
        howtoCanvas.obj.style.display = "inline-block";
        howtoCanvas.run();
    }


    introCanvas.onclickDev = function () {
        introCanvas.obj.style.display = "none";
        // introCanvas.pause();
        devCanvas.obj.style.display = "inline-block";
        devCanvas.run();
    }

    introCanvas.onclickOption = function () {
        introCanvas.obj.style.display = "none";
        optionCanvas.obj.style.display = "inline-block";
        optionCanvas.run();
    }

    howtoCanvas.onclickReturn = function () {
        this.obj.style.display = "none";
        introCanvas.obj.style.display = "inline-block";
        introCanvas.run();
    }

    gameCanvas.onGameOver = function () {
        this.obj.style.display = "none";
        gameCanvas.pause();
        introCanvas.mainAudio.pause();
        gameOverCanvas.obj.style.display = "inline-block";
        gameOverCanvas.run();
    }

    gameCanvas.onLevelUp = function () {
        this.obj.style.display = "none";
        gameCanvas.pause();
        gameCanvas.init();
        levelUpCanvas.obj.style.display = "inline-block";
        levelUpCanvas.run();
    }

    gameCanvas.onComplete = function () {
        this.obj.style.display = "none";
        gameCanvas.pause();
        introCanvas.mainAudio.pause();
        completeCanvas.obj.style.display = "inline-block";
        completeCanvas.run();

    }


    levelUpCanvas.onclickNext = function () {
        this.obj.style.display = "none";
        gameCanvas.obj.style.display = "inline-block";
        gameCanvas.obj.focus();
        gameCanvas.isRunning = true;
        gameCanvas.run();
    }

    completeCanvas.onclickReturn = function () {
        this.obj.style.display = "none";
        completeCanvas.pause();
        introCanvas.obj.style.display = "inline-block";
        introCanvas.obj.focus();
        introCanvas.isRunning = true;
        introCanvas.run();
        openingCanvas.introAudio.play();
    }

    gameOverCanvas.onclickReturn = function () {
        this.obj.style.display = "none";
        introCanvas.obj.style.display = "inline-block";
        introCanvas.run();
        openingCanvas.introAudio.play();
        
    }


    devCanvas.onclickReturn = howtoCanvas.onclickReturn;
    optionCanvas.onclickReturn = howtoCanvas.onclickReturn;
    // gameOverCanvas.onclickReturn = howtoCanvas.onclickReturn;

    openingCanvas.run();

    setTimeout(() => {
        introCanvas.pause();
        setTimeout(() => {
            introCanvas.run();
        }, 2000);
    }, 2000);

};


