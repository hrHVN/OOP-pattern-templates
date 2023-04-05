import LoggerObject from './singelton.js';

export default function logSecondImplemntation() {
    LoggerObject.printLoggCounts();
    LoggerObject.log('Second logg');
    LoggerObject.printLoggCounts();
}