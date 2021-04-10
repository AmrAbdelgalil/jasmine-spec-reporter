import { Configuration } from './configuration'
import { CustomReporterResult } from './spec-reporter'
import { Theme } from './theme'
import SuiteInfo = jasmine.SuiteInfo

export class DisplayProcessor {
  protected configuration: Configuration
  protected theme: Theme

  constructor(configuration: Configuration, theme: Theme) {
    this.configuration = configuration
    this.theme = theme
  }

  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return log
  }

  public displaySuite(suite: CustomReporterResult, log: string): string {
    return log
  }

  public displaySpecStarted(spec: CustomReporterResult, log: string): string {
    return log
  }

  public displaySuccessfulSpec(spec: CustomReporterResult, log: string): string {
    return log
  }

  public displayFailedSpec(spec: CustomReporterResult, log: string): string {
    return log
  }

  public displaySpecErrorMessages(spec: CustomReporterResult, log: string): string {
    return log
  }

  public displaySummaryErrorMessages(spec: CustomReporterResult, log: string): string {
    return log
  }

  public displayPendingSpec(spec: CustomReporterResult, log: string): string {
    return log
  }
}
