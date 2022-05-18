// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {post, requestBody, response} from '@loopback/rest';
import {NhostService} from '../services';

export class MainController {
  constructor(@service(NhostService) public service: NhostService) { }

  @post('/query')
  @response(200)
  async query(
    @requestBody({
      content: {
        'text/plain': {
          schema: {}
        }
      }
    })
    query: string
  ): Promise<object> {
    const results = await this.service.query(query);
    return results
  }
}
