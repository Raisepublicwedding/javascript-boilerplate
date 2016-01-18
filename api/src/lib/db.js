import pg from 'pg';
import config from 'config';

export default config => {
    const {host, user, pswd, name} = config;
    const connection = `postgres://${user}:${pswd}@${host}/${name}`;
    return new pg.Client(connection);
}
