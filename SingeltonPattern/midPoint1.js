import LoggerObject from './singelton.js';

export default function logFirstImplemntation() {
    LoggerObject.printLoggCounts();
    LoggerObject.log('First logg');
    LoggerObject.printLoggCounts();
}