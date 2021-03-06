import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    sockets?: { 
      [key: string]: (data: any | undefined) => void
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $socket: { 
      emit: (eventName: string, payload: any, ...acknowledgement: any[]) => void
    }
  }
}
