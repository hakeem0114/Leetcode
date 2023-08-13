class EventEmitter {

    //Leetcode does not allow a constructor for some reason, 
    //It has to be delecared outside its scope without a variable
    // constuctor(){
    //     this.events = {}
    // }

    events = {}

  subscribe(event, cb) {

      //#1. else in this case doesn't work in leetcode for some reason
    //   if(!this.events.hasOwnProperty(event)){ //Check if object has a key/property yet
    //       //New event
    //       this.events[event] = new Set()
    //   }else{
    //       //Update exisiting event set/list of subscriptions in obj
    //       this.events[event].add(cb)
    //   }

        //#2
      if(!this.events.hasOwnProperty(event)){ //Check if object has a key/property yet
          //New event
          this.events[event] = new Set()
      }
      //Update exisiting event set/list of subscriptions in obj
      this.events[event].add(cb)
      
    return {
        unsubscribe: () => {
            //Callback from list of subscriptions(callbacks/set) will be removed
            this.events[event].delete(cb)
           // return undefined
        }
    };
  }

  emit(event, args = []) { //..args is passed to the callbacks & called
    
    //Return [] is event has no callbacks
   if(!this.events[event])return []

    //Loop through set in required event,
    //so return arr of callback calls with passed in ...args
    const result = []

    //for of loop not working for some reason
    for(let callback of this.events[event]){
        result.push(callback(...args))
    }

    return result

  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */