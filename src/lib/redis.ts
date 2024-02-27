import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu1-magnetic-bluebird-39630.upstash.io',
  token: process.env.REDIS_TOKEN!,
})
