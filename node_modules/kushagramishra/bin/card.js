#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Kushagra Mishra'),
  handle: chalk.cyan('@kushagraup'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('I\'m an Engineering Student, Developer and an Ethical Hacking Enthusiast. '),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.cyan('https://twitter.com/Kushagra0607'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/kushagraup'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/kushagramishra05/'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://kushagramishra.netlify.app/'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx kushagramishra'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
