export class Hero {
  // this is our data model. the "message" and "messageState" properties are used in the "banner" demo
  constructor(
    public name: string,
    public message = '',
    public messageState = 'hidden'
  ) {}
}
