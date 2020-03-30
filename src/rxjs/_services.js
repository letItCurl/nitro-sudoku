import { Subject } from 'rxjs';

const subject1 = new Subject();
const subject2 = new Subject();
const pipeLogsToContent = new Subject();


export const messageService1 = {
    sendMessage: message => subject1.next(message),
    clearMessages: () => subject1.next(),
    getMessage: () => subject1.asObservable()
};

export const messageService2 = {
    sendMessage: message => subject2.next(message),
    clearMessages: () => subject2.next(),
    getMessage: () => subject2.asObservable()
};

export const messageLogsToContent = {
    sendMessage: message => pipeLogsToContent.next(message),
    clearMessages: () => pipeLogsToContent.next(),
    getMessage: () => pipeLogsToContent.asObservable()
};