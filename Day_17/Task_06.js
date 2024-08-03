//  Use the Queue class to simulate a simple printer queue where print obs are added to the queue and processes in order.


class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty. No element to dequeue");
            return undefined;
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            console.log("Queue is empty. No element at the front");
            return undefined;
        };
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
    display(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        console.log("Queue element:"+this.items.join(","));
    }
}


class PrinterQueue{
    constructor(){
        this.queue = new Queue();
    }
    addPrintJob(job){
        this.queue.enqueue(job);
        console.log(` Print ob added:${job}`);
    }
    processPrintJobs(){
         while(!this.queue.isEmpty()){
            const job = this.queue.dequeue();
            console.log(`Processing print job:${job}`);
            this.simulatePrintTime(job);
         }
    }
    simulatePrintTime(job){
        console.log(`Printing${job}...`);
        setTimeout(()=>{
          console.log(` Finised printing:${job}`);
        },2000)
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Image1.png");
printerQueue.addPrintJob("Presentation.pptx");

console.log("Starting to process print jobs...");
printerQueue.processPrintJobs();

