const { defaultDelay } = require('../config/constants')

const waitForResponse = async ({
  page,
  trigger,
  expectedRequestType,
  expectedRequestMethod,
  expectedResponseUrl,
  expectedResponseStatus,
  timeOut = defaultDelay,
  log = process.env.DEBUG === "true"
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const clear = () => {
        page.removeListener('response', onResponse);
        clearTimeout(guard);
      }

      const onResponse = async (response) => {
        const type = response?._request?._initiator?.type;
        const method = response?.request?.().method?.();
        const url = response?.url?.();
        const status = response?.status?.();
        const body = await response?.json?.().catch(() => false);

        const condition = type.trim() === expectedRequestType.trim() &&
          method.trim() === expectedRequestMethod.trim() &&
          url.trim() === expectedResponseUrl.trim() &&
          Number(status) === Number(expectedResponseStatus) &&
          body !== false

        if (log) {
          console.warn({
            type,
            method,
            url,
            status,
            body,
          });
        }

        if (condition) {
          clear();
          return resolve({
            type,
            method,
            url,
            status,
            body,
          });
        }
        if (process.env.DEBUG === 'true' && method !== 'OPTIONS' && type === 'script') return reject({
          typeExpected:expectedRequestType,
          typeReceived: type,
          methodExpected: expectedRequestMethod,
          methodReceived:method,
          urlExpected: expectedResponseUrl,
          urlReceived: url,
          statusExpected:expectedResponseStatus ,
          statusReceived: status,
          receivedBody: JSON.stringify(body),
        })
      };

      page.on('response', onResponse);

      const guard = setTimeout(() => {
        clear();
        throw new Error(`Foi atingido o tempo máximo de espera da requisição com os critérios: ${JSON.stringify({
          trigger,
          expectedRequestType,
          expectedRequestMethod,
          expectedResponseUrl,
          expectedResponseStatus,
          timeOut
        }, null, '\t')}`);
      }, timeOut)

      await trigger(page)
    } catch (error) {
      return reject(error);
    }
  });

module.exports = waitForResponse;
