import { Service, Inject } from 'typedi';
import config from '@/config';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import events from '@/subscribers/events';

@Service()
export default class BpService {
  constructor(
    @Inject('bpModel') private bpModel: Models.BpModel,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }

  public async AddBp(diastolic: number, systolic: number, pulse: number, date: Date, userId: string): Promise<{ bp: Document }> {
    try {
      this.logger.silly('Creating bp record');
      const bpRecord = await this.bpModel.create({ diastolic, systolic, pulse, date, user: userId });
      if (!bpRecord) {
        throw new Error('Bp cannot be created');
      }
      //this.eventDispatcher.dispatch(events.bp.created, bpRecord);
      return { bp: bpRecord };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  
}
