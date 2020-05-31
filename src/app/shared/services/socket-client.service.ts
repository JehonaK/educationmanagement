import * as SockJS from 'sockjs-client';
import { Stomp, Client, StompSubscription } from "@stomp/stompjs";
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocketClientState } from '../models/socket-client-state.type'
import { filter, first, switchMap } from 'rxjs/operators';
import { ChatMessageModel } from '../models/chat-message.model';

@Injectable({
    providedIn: 'root'
})
export class SocketClientService implements OnDestroy {
    private client: any;
    private state: BehaviorSubject<SocketClientState>;
    
    constructor() {
      this.client = Stomp.over(new SockJS("http://localhost:8081/message"));
      this.state = new BehaviorSubject<SocketClientState>(SocketClientState.ATTEMPTING);
      this.client.connect({}, (frame) => {
        this.state.next(SocketClientState.CONNECTED);
      });
    }
  
    private connect(): Observable<Client> {
      return new Observable<Client>(observer => {
        this.state.pipe(filter(state => state === SocketClientState.CONNECTED)).subscribe(() => {
          observer.next(this.client);
        });
      });
    }

    ngOnDestroy() {
        this.connect().pipe(first()).subscribe((client: any) => client.disconnect(null));
    }

    onMessage(topic: string): Observable<any> {
        return this.connect().pipe(first(), switchMap(inst => {
          return new Observable<any>(observer => {
            const subscription: StompSubscription = inst.subscribe(topic, message => {
              observer.next(JSON.parse(message.body));
            });
            return () => inst.unsubscribe(subscription.id);
          });
        }));
    }

    send(message: ChatMessageModel) {
      this.connect()
      .pipe(first())
      .subscribe((inst:any) => inst.send("/app/message/" + message.conversationId, {}, JSON.stringify(message)));
        // this.client.send("ws://localhost:8081/app/message/"+ message.conversationId, {}, JSON.stringify(message))
    }

}