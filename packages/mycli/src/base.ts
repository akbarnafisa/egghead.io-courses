/* eslint-disable unicorn/prefer-module */
import {Command} from '@oclif/core'
import {cosmiconfig} from 'cosmiconfig'
const explorer = cosmiconfig('mycli')
// const debug = require('debug')('mycli:base')

type ConfigType = {
  name?: string
}

const updateNotifier = require("update-notifier");
const pkg = require("../package.json");

export default abstract class Base extends Command {
  static config: null | ConfigType

  async init(): Promise<void> {
    const notifier = updateNotifier({
      pkg,
      updateCheckInterval: 1000,
      shouldNotifyInNpmScript: true,
    });
    notifier.notify();
    const config =  await explorer.search()
    // debug('parsing config', {config, filepath})
    this.config = config?.config
  }
}
