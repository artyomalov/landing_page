import json
import requests
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

bot_token = settings.BOT_TOKEN
channel_id = settings.CHANNEL_ID

url = f'https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={channel_id}&chat_type=private'


@csrf_exempt
def send_data_to_tg(request):
    """
    get data from form and send it to Telegram private channel using Telegram
    bot api. Returns status: ok, or status failed if error has been thrown.
    :param request:
    :return: HttpResponse
    """

    if request.method == "POST":
        response_data = {
            "status": "ok"
        }

        request_data = json.loads(request.body)
        try:
            requests.get(
                url + f'&text=Новый пациент:\n\
    Имя: {request_data.get("userName")}\n\
    Телефон: {request_data.get("userPhoneNumber")}\n\
    Email: {request_data.get("userEmail")}\n\
    Описание проблемы: {request_data.get("userMessage")}').content
            response_json = json.dumps(response_data)
            return HttpResponse(
                response_json,
                headers={
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': ['http://127.0.0.1:8000',
                                                    'http://localhost:8000/notify'],
                }
            )
        except Exception as error:
            print(error)
            response_json = json.dumps({
                "status": "failed",
                "error": error
            })
            return HttpResponse(
                response_json,
                headers={
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': ['http://127.0.0.1:8000',
                                                    'http://localhost:8000/notify'],
                }
            )

    if request.method == "OPTIONS":
        return HttpResponse(
            headers={
                'Access-Control-Allow-Origin': ['http://127.0.0.1:8000',
                                                'http://localhost:8000/notify'],
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': ['POST', 'OPTIONS'],
                'Access-Control-Allow-Headers': 'Content-type',
            }
        )
