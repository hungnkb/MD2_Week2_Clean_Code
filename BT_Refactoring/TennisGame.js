"use strict";
exports.__esModule = true;
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame() {
        this.score = '';
    }
    TennisGame.prototype.scoreDifference = function (firstPlayerScore, secondPlayerScore) {
        if (firstPlayerScore == secondPlayerScore) {
            return 0;
        }
        else if (firstPlayerScore >= 4 || secondPlayerScore >= 4) {
            return 4;
        }
    };
    TennisGame.prototype.scoreEqual = function (firstPlayerScore, secondPlayerScore) {
        if (firstPlayerScore == secondPlayerScore) {
            switch (firstPlayerScore) {
                case 0:
                    this.score = "Love-All";
                    break;
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;
            }
        }
    };
    TennisGame.prototype.scoreMoreThan4 = function (firstPlayerScore, secondPlayerScore, firstPlayerName, secondPlayerName) {
        if (firstPlayerScore >= 4 || secondPlayerScore >= 4) {
            var minusResult = firstPlayerScore - secondPlayerScore;
            if (minusResult == 1)
                this.score = "Advantage" + secondPlayerName;
            else if (minusResult == -1)
                this.score = "Advantage player2";
            else if (minusResult >= 2)
                this.score = "Win for" + secondPlayerName;
            else
                this.score = "Win for player2";
        }
    };
    TennisGame.prototype.scoreLessThan4 = function (firstPlayerScore, secondPlayerScore) {
        var tempScore = 0;
        for (var i = 1; i < 3; i++) {
            if (i == 1)
                tempScore = firstPlayerScore;
            else {
                this.score += "-";
                tempScore = secondPlayerScore;
            }
            switch (tempScore) {
                case 0:
                    this.score += "Love";
                    break;
                case 1:
                    this.score += "Fifteen";
                    break;
                case 2:
                    this.score += "Thirty";
                    break;
                case 3:
                    this.score += "Forty";
                    break;
            }
        }
    };
    TennisGame.prototype.getScore = function (firstPlayerName, secondPlayerName, firstPlayerScore, secondPlayerScore) {
        var scoreDifference = this.scoreDifference(firstPlayerScore, secondPlayerScore);
        switch (scoreDifference) {
            case 0:
                this.scoreEqual(firstPlayerScore, secondPlayerScore);
                break;
            case 4:
                this.scoreMoreThan4(firstPlayerScore, secondPlayerScore, firstPlayerName, secondPlayerName);
                break;
            default:
                this.scoreLessThan4(firstPlayerScore, secondPlayerScore);
        }
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
