const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
   // new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
   // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function evento_Error() {
    throw new Error("Error ocacionado");
  }

  
  try {
    evento_Error();
  } catch (e)
  
    {
    console.error(`El valor de e es: ${e}`)
    logger.log("error", e.toString());
    
  }