export class TennisGame {

    score: string = '';

    scoreDifference(firstPlayerScore: number,
        secondPlayerScore: number) {
        if (firstPlayerScore == secondPlayerScore) {
            return 0;
        }
        else if (firstPlayerScore >= 4 || secondPlayerScore >= 4) {
            return 4;
        }
    }

    scoreEqual(firstPlayerScore: number,
        secondPlayerScore: number) {
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
    }

    scoreMoreThan4(firstPlayerScore: number,
        secondPlayerScore: number, firstPlayerName: string,
        secondPlayerName: string) {
        if (firstPlayerScore >= 4 || secondPlayerScore >= 4) {
            let minusResult = firstPlayerScore - secondPlayerScore;
            if (minusResult == 1) this.score = "Advantage" + secondPlayerName;
            else if (minusResult == -1) this.score = "Advantage player2";
            else if (minusResult >= 2) this.score = "Win for" + secondPlayerName;
            else this.score = "Win for player2";
        }
    }

    scoreLessThan4(firstPlayerScore: number,
        secondPlayerScore: number) {
        let tempScore = 0;
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = firstPlayerScore;
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
    }

    getScore(firstPlayerName: string,
        secondPlayerName: string,
        firstPlayerScore: number,
        secondPlayerScore: number) {

        let scoreDifference = this.scoreDifference(firstPlayerScore, secondPlayerScore)

        switch (scoreDifference) {
            case 0:
                this.scoreEqual(firstPlayerScore, secondPlayerScore);
                break;
            case 4:
                this.scoreMoreThan4(firstPlayerScore, secondPlayerScore, firstPlayerName, secondPlayerName);
                break;
            default:
                this.scoreLessThan4(firstPlayerScore, secondPlayerScore)

        }

    }
}
