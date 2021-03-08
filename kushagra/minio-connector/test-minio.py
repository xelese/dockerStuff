from minio import Minio


def main():
    # Create a client with the MinIO server playground, its access key
    # and secret key.
    # Note here secure is set False refer Readme.md for details:
    # connection class to test directly
    # client = Minio("localhost:9000",
    #                access_key="minio",
    #                secret_key="minio123",
    #                secure=False,
    #                )

    # connetion class inside docker file
    client = Minio("minio:9000",
                   access_key="minio",
                   secret_key="minio123",
                   secure=False,
                   )

    # Make 'asiatrip' bucket if not exist.
    found = client.bucket_exists("asiatrip")
    print(found)


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("error occurred.", exc)
