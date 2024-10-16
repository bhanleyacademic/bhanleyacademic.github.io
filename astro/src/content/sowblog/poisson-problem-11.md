---
title: 'Goblin Guild Dividend'
description: 'If a guild pays a dividend, what is the probability that someone in the guild received it?'
pubDate: 'October 16, 2024'
heroImage: '/sow/ah.jpg'
---

## The Problem
Suppose a guild rewards players who consistently sell items on the Auction House. The guild plans to give a bonus to players who have sold no more than 1 Sky Golem mount in the past quarter (3 months); to reward those who only occasionally sell rare mounts and don't flood the market.

The number of Sky Golem mounts sold by each player in the past 3 months follows a Poisson distribution with a mean of 0.288. The number of sales incurred in any quarter is independent of the number incurred in any other quarter.

What is the probability that a player chosen at random from the group will receive the bonus?
<details>
<summary>Formulas you will need</summary>

**Poisson Probability Formula**: $P(X=k)=\frac{\lambda^ke^{-\lambda}}{k!}$
</details>
<details>
<summary>Getting Started</summary>

- Find $\lambda$ for the quarter
- Calculate the probability ($P[\text{A player has sold no more than 1 Sky Golem in the last quarter}]$)

</details>
<details>
<summary>Hints</summary>

- $P[\text{A player has sold no more than 1 Sky Golem in the last quarter}] = P(X\leq1)$
- $P(X\leq1) = P(X=0)+P(X+1)$
- $\lambda_{\text{3 months}} = 3\lambda$
</details>
<details>
<summary>Solution</summary>

First calculate the adjusted $\lambda$  
$\lambda_{\text{3 months}} = 3\lambda=3\times0.288=0.864$

Use the Poisson probability formula to calculate $P(X=0)$ & $P(X=1)$  
$P(X=0) = \frac{0.864^0e^{-0.864}}{0!} = \frac{1\times e^{-0.864}}{1} = e^{-0.864}\approx 0.4213$  
$P(X=1) = \frac{0.864^1e^{-0.864}}{0!} = \frac{0.864\times e^{-0.864}}{1} = 0.864\times e^{-0.864}\approx 0.3634$  
Therefore  
$P(X<2)=P(X=0)+P(X=1)=0.4213+0.3634=0.7847$

</details>