/* eslint-disable unicorn/prefer-module */
import {Flags} from '@oclif/core'
import Base from '../base'
import {prompt} from 'enquirer'
const copy = require('copy-template-dir')
const path = require('path')
// const execa = require('execa')
const {spawn} = require('yarn-or-npm')

export default class Hello extends Base {
  static description = 'Say hello';

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];

  static flags = {
    name: Flags.string({
      char: 'n',
      description: 'Whom is saying hello',
    }),
  };

  async run(): Promise<void> {
    const {flags} = await this.parse(Hello)
    if (typeof flags.name === 'undefined') {
      if (this.config && this.config.name) {
        flags.name = this.config.name
      } else {
        try {
          const {name} = await prompt<{ name: string}>({
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          })
          flags.name = name
        } catch (error) {
          console.log(error)
        } finally {
          console.log('You can specify this with the --from flag in the future')
        }
      }
    }

    const name = flags.name
    const vars = {projectName: name}
    const inDir = path.resolve(__dirname, '../../templates/rollup-react')
    const outDir = path.join(process.cwd(), name)

    copy(inDir, outDir, vars, async (err: Error) => {
      if (err) throw err
      process.chdir(outDir)
      try {
        // const {stdout} = await execa('yarn', ['install'])
        const {stdout} = await spawn(['install'])
        console.log({
          outDir,
          stdout,
        })
      } catch (error) {
        console.log(error)
      }
    })
  }
}
