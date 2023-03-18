from moralis import evm_api
from dotenv import load_dotenv
import os


load_dotenv()

api_key = os.getenv("MORALIS_API_KEY")


def upload_img_to_ipfs(path, image):
    body = [
        {
            "path": path,
            "content": image,
        }
    ]

    result = evm_api.ipfs.upload_folder(
        api_key=api_key,
        body=body,
    )

    return result
