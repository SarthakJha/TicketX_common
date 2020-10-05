export enum OrderStatus {
  // order created bit ticket not reserved
  Created = 'created',

  /**
   * #1 ticket trying to be reserves, already has been reserved
   * #2 when user cancelled the order
   * #3 order expires
   */
  Cancelled = 'cancelled',

  // ticket has been reserved
  AwaitingPayment = 'awaiting:payment',

  // ticket reserved and payment successfull
  Complete = 'complete',
}
