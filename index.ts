import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

//creaza un Observable<Event>, adica observa un eveniment
const clicks = fromEvent(document, 'click');
//creaza un Observable<number> care inumara la fiecare 1000ms si retine in //intervalEvents
const intervalEvents = interval(1000);


//buffer<number>(closingNotifier: Observable<any>)//:OperatorFunction<number, number[]>

//Observable<number>.pipe<number[]>(op1: OperatorFunction<number,number[]>)//: Observable<number[]>

//creaza un Observable<number[]> 
//cand clicks se activeaza buffer se uita in intervalEvents (in cazul //nostru closingNotifier: Observable<any>) si vede ce valori sunt si le //transforma in number[] care este un array de aici si denumirea de buffer
//pipe atasat la intervalEvents practic ia valorile din intervalEvents //insa doar pe cele din buffer
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));
intervalEvents.subscribe(x => console.log(x));