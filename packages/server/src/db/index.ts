import { Pool } from 'pg'

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL
        ? {
              rejectUnauthorized: false,
          }
        : false,
})

type ValueType = string | number | unknown

/**
 *
 * @param text
 * @param values
 */
export const query = async <T>(
    text: string,
    values: ValueType[],
): Promise<T[]> => {
    return pool.connect().then(async (client) => {
        return client
            .query<T, ValueType[]>(text, values)
            .then((response) => {
                client.release()
                return response.rows
            })
            .catch((error) => {
                client.release()
                console.error(error)
                throw new Error('Database error')
            })
    })
}
