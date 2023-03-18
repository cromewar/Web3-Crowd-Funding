from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .services import upload_img_to_ipfs
import json


# Create your views here.
@csrf_exempt
def upload_img(request):
    if request.method == "POST":
        json_data = json.loads(request.body)
        path = json_data["path"]
        content = json_data["content"]

        result = upload_img_to_ipfs(path=path, image=content)
        json_result = json.dumps(result)
        return HttpResponse(json_result, content_type="application/json")
