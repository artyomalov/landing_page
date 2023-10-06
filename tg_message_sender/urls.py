from django.urls import path
from .views import send_data_to_tg

urlpatterns = [
    path('', send_data_to_tg, name="send data to tg"),
]
