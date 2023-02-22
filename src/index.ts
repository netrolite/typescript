interface BaseEvent {
  time: number,
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number, sku: string };
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
) {
  console.log(name);
  console.log(data);
}

// not ideal, quantity and sku properties are not required
sendEvent("checkout", { time: 100, user: "xyz123" });
