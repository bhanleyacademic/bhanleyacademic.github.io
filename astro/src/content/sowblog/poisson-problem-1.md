---
title: 'How many Sky Golems will be listed today?'
description: 'Using Poisson distribution, find out the probability that X amount of Sky Golems will be listed today.'
pubDate: 'October 15, 2024'
heroImage: '/sow/sky-golem.jpeg'
---

## The Problem
Suppose the number of Sky Golem mounts listed on the Auction House in a day follows a Poisson distribution with a standard deviation of 2.

Calculate the probability that on a particular day, at least 2 Sky Golem mounts will be listed.

<details>
<summary>Formulas you will need</summary>

**Mean**: $\lambda=\sigma^2$  
**Standard Deviation**: $\sigma=\sqrt{\lambda}$  
**Poisson Probability Formula**: $P(X=k)=\frac{\lambda^ke^{-\lambda}}{k!}$
</details>
<details>
<summary>Getting Started</summary>

- Find $\lambda$
- Calculate the probability ($P(X\geq2)$)

</details>
<details>
<summary>Hints</summary>

- $P(X\geq2) = 1-P(X<2)$
- $P(X<2) = P(X=0)+P(X+1)$
</details>
<details>
<summary>Solution</summary>

Standard Deviation is given so  
$2=\sqrt{\lambda}$  
therefore,  
$\lambda=4$

Use the Poisson probability formula to calculate $P(X=0)$ & $P(X=1)$  
$P(X=0) = \frac{4^0e^{-4}}{0!} = \frac{1\times e^{-4}}{1} = e^{-4}\approx 0.0183$  
$P(X=1) = \frac{4^1e^{-4}}{0!} = \frac{4\times e^{-4}}{1} = 4\times e^{-4}\approx 0.0733$  
Therefore  
$P(X<2)=P(X=0)+P(X=1)=0.0183+0.0733=0.0916$

Finally find the probability of at least 2 Sky Golems being listed:  
$P(X\geq2)=1-P(X<2) = 1-0.0916 = 0.9084$

</details>