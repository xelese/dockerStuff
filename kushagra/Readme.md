RUN
-------------

``Docker-compose up``

MINIO SECURE FALSE
-----
The minio is set to false because it throws the following error:

    raise MaxRetryError(_pool, url, error or ResponseError(cause)) 
    urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host='localhost', port=9000):
    Max retries exceeded with url: /asiatrip?location= (Caused by SSLError(SSLError(1, '[SSL: WRONG_VERSION_NUMBER] wrong version number (_ssl.c:1108)'))

found a workaround here: https://github.com/minio/minio-dotnet/issues/350

refer these to set SSL right and fix the issue:
https://docs.minio.io/docs/how-to-secure-access-to-minio-server-with-tls.html