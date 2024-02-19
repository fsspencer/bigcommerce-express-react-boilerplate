import util from 'util';
import fs from 'graceful-fs'

/**
 * Custom logger
 *
 * @param message
 */
export default function log(message) {
    let debug = fs.createWriteStream('var/debug.log', { flags: 'a' });
    let date = new Date();

    let timeString = date.toLocaleDateString('sv') + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    debug.write('(' + timeString + ') ' + util.format(message) + '\n');
}
