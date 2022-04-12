import React from "react";

export default class RPS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            computerScore: 0,
            playerScore: 0,
            textColor: 'white',
            message: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(evt) {
        evt.preventDefault();
        let sel = Math.ceil(Math.random() *3)
        let pscore = this.state.playerScore;
        let cscore = this.state.computerScore;

        const compSel = sel == 1 ? "rock" : sel == 2 ? "paper" : "scissors";
        const playerSel = evt.target.value;
        console.log(`${compSel} ${playerSel}`)
        if(compSel == playerSel) {
            this.setState({message: `You both picked ${playerSel}`})
        }else {
            let playerNum = playerSel == "rock"? 1: playerSel == "paper"? 2: 3
            console.log(`${sel} ${playerNum}`)
            if(sel-playerNum == 1 || sel-playerNum == -2) {
                if(this.state.computerScore+1 > this.state.playerScore) {
                    this.setState({
                        message: `${compSel} beats ${playerSel}`,
                        computerScore: cscore+1,
                        textColor: "red"
                    })
                }else if(this.state.computerScore+1 == this.state.playerScore) {
                    this.setState({
                        message: `${compSel} beats ${playerSel}`,
                        computerScore: cscore+1,
                        textColor: "white"
                    })
                }else {
                    this.setState({
                        message: `${compSel} beats ${playerSel}`,
                        computerScore: cscore+1,
                    })
                }
            } else {
                if(this.state.playerScore+1 > this.state.computerScore) {
                    this.setState({
                        message: `${playerSel} beats ${compSel}`,
                        playerScore: pscore+1,
                        textColor: "green"
                    })
                }else if(this.state.playerScore+1 == this.state.computerScore) {
                    this.setState({
                        message: `${playerSel} beats ${compSel}`,
                        playerScore: pscore+1,
                        textColor: "white"
                    })
                }else {
                    this.setState({
                        message: `${playerSel} beats ${compSel}`,
                        playerScore: pscore+1,
                    })
                }
                
            }
        }
    }

    handleReset() {
        return
    }


    render() {
        return(
            <div className="function">
                <h1 >Play a game of Rock Paper, Scissors against the Computer!</h1>
                <div className="scoreboard">
                    <h3 id="score" className="score" style={{color: this.state.textColor}}>Player: {this.state.playerScore}</h3>
                    <h3 id="score" className="score" style={{color: this.state.textColor}}>Computer: {this.state.computerScore}</h3>
                </div>
                
                <h3 id="displayMessage" style={{height: '10px'}}>{this.state.message}</h3>
                <div>
                    <form id="selection">
                        <button className="RPSButton" name="input" id="rock" value="rock" onClick={this.handleClick}>Rock</button>
                        <button className="RPSButton" name="input" id = "paper" value = "paper" onClick={this.handleClick}>Paper</button>
                        <button className="RPSButton" name="input" id="scissors" value="scissors" onClick={this.handleClick}>Scissors</button>
                    </form>
                </div>
            </div>
        )
    }
}