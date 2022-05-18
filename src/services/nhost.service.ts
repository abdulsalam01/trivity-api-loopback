import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {NhostClient} from '@nhost/nhost-js';
import env from '../utilities/const';

@injectable({scope: BindingScope.TRANSIENT})
export class NhostService {

  private key: string;
  private nhost: NhostClient;

  constructor() {
    this.key = env.secretKey!;
    this.nhost = new NhostClient({
      backendUrl: env.backendUrl!,
    })
  }

  /*
   * Add service methods here
   */
  async get() {
    return this.nhost.graphql.getUrl();
  }

  async query(params: string) {
    const {data, error} = await this.nhost.graphql.request(params)
    return {data, error}
  }
}
