import React from 'react'

class OddsCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oddsType: 'american',
      americanOdds: '',
      decimalOdds: '',
      impliedProbability: '',
      betAmount: '',
      toWin: 0,
      payout: 0
    }

    this.onAmericanOddsChange = this.onAmericanOddsChange.bind(this);
    this.onDecimalOddsChange = this.onDecimalOddsChange.bind(this);
    this.onProbablityChange = this.onProbablityChange.bind(this);

    this.onBetAmountChange = this.onBetAmountChange.bind(this);
    this.onAmountEarnedChange = this.onAmountEarnedChange.bind(this);

    this.calcAmericanToDecimals = this.calcAmericanToDecimals.bind(this);
    this.calcDecimalToAmerican = this.calcDecimalToAmerican.bind(this);
    this.calcDecimalToProbability = this.calcDecimalToProbability.bind(this);
    this.calcProbabilityToDecimal = this.calcProbabilityToDecimal.bind(this);
  }

  onAmericanOddsChange(e) {
    this.setState({
      americanOdds: e.target.value
    }, () => {
      if (this.state.americanOdds.length >= 3) {
      const decimalOdds = this.calcAmericanToDecimals(this.state.americanOdds);
      const impliedProbability = this.calcDecimalToProbability(decimalOdds);
      this.setState({
        decimalOdds: decimalOdds,
        impliedProbability: impliedProbability,
        payOut: this.state.betAmount * decimalOdds,
        toWin: (this.state.betAmount * decimalOdds - this.state.betAmount)
      })} else {
        this.setState({
          decimalOdds: '',
          impliedProbability: '',
          toWin: 0,
          payOut: 0
        })
      }
    })
  }

  onDecimalOddsChange(e) {
    this.setState({
      decimalOdds: e.target.value
    }, () => {
      if (this.state.decimalOdds > 1) {
        const americanOdds = this.calcDecimalToAmerican(this.state.decimalOdds);
        const impliedProbability = this.calcDecimalToProbability(this.state.decimalOdds)
        this.setState({
          americanOdds: americanOdds,
          impliedProbability: impliedProbability,
          payOut: this.state.betAmount * this.state.decimalOdds,
          toWin: (this.state.betAmount * this.state.decimalOdds - this.state.betAmount)
        })
      } else {
        this.setState({
          americanOdds: '',
          impliedProbability: '',
          payOut: 0,
          toWin: 0
        })
      }
    })
  }

  onProbablityChange(e) {
    this.setState({
      impliedProbability: e.target.value
    }, () => {
      if (this.state.impliedProbability > 0) {
        const decimalOdds = this.calcProbabilityToDecimal(this.state.impliedProbability);
        const americanOdds = this.calcDecimalToAmerican(decimalOdds);
        this.setState({
          americanOdds: americanOdds,
          decimalOdds: decimalOdds,
          payOut: this.state.betAmount * decimalOdds,
          toWin: (this.state.betAmount * decimalOdds - this.state.betAmount)
        })} else {
          this.setState({
            americanOdds: '',
            decimalOdds: '',
            payOut: 0,
            toWin: 0
          })
        }
    })
  }

  onBetAmountChange(e) {
    this.setState({
      betAmount: e.target.value
    }, () => {
      if (this.state.betAmount > 0 && this.state.decimalOdds > 1) {
        const payOut = Math.ceil(this.state.betAmount * this.state.decimalOdds * 100) / 100;
        console.log(payOut)
        const toWin = payOut - this.state.betAmount
        this.setState({
          payOut: payOut,
          toWin: Math.ceil(toWin * 100) / 100
        })
      } else {
        this.setState({
          payOut: '',
          toWin: ''
        })
      }
    })
  }

  onAmountEarnedChange(e) {
    this.setState({
      toWin: e.target.value
    })
  }

  calcAmericanToDecimals(num) {
    if (num >= 100) {
      return Math.ceil(((num / 100) + 1) * 1000000) / 1000000
    } else if (num < -100) {
      return Math.ceil((1 - (100 / num)) * 1000000) / 1000000
    }
  }

  calcDecimalToAmerican(num) {
    if (num >= 2) {
      return Math.round((num - 1) * 100)
    } else if (num < 2 || num > 1) {
      return Math.round(-100/(num - 1))
    }
  }

  calcDecimalToProbability(num) {
    return Math.ceil(((100/num)) * 100) / 100;
  }

  calcProbabilityToDecimal(num) {
    return 100/num
  }

  render() {
    return (
    <div>
      <h1>Odds Converter and Calculator</h1>
      <div>
        <div className="odds-input-container">
          <label className="type-odds-label">American Odds</label>
          <input className="odds-input"
            type='number'
            value={this.state.americanOdds}
            onChange={this.onAmericanOddsChange}
          />
        </div>

        <div className="odds-input-container">
          <label className="type-odds-label">Decimal Odds</label>
          <input className="odds-input"
            type='number'
            value={this.state.decimalOdds}
            onChange={this.onDecimalOddsChange}
          />
        </div>

        <div className="odds-input-container">
          <label className="type-odds-label">Implied Probability</label>
          <input className="odds-input"
            type='number'
            value={this.state.impliedProbability}
            onChange={this.onProbablityChange}
          />
        </div>
      </div>

        <div className="bet-input-container">
          <label className="bet-number-label">Wager Amount</label>
          <input className="bet-input"
            type='number'
            value={this.state.betAmount}
            onChange={this.onBetAmountChange}
          />
        </div>

        <div className="bet-input-container">
          <label className="bet-number-label">Amount Earned</label>
          <input className="bet-input"
            type='number'
            value={this.state.toWin}
            onChange={this.onAmountEarnedChange}
          />
        </div>



        <div className="bet-input-container">
          <label className="bet-number-label">
            Payout: {this.state.payOut}
          </label>
        </div>


      </div>
    )
  }

}

export default OddsCalculator;